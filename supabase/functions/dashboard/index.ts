import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const url = new URL(req.url);
    const pathParts = url.pathname.split("/");
    const employeeId = pathParts[pathParts.length - 1];

    if (!employeeId) {
      return new Response(
        JSON.stringify({ error: "Employee ID is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: tasks, error: tasksError } = await supabase
      .from("tasks")
      .select("*")
      .eq("employee_id", employeeId);

    if (tasksError) {
      return new Response(
        JSON.stringify({ error: "Error retrieving tasks" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: attendance, error: attendanceError } = await supabase
      .from("attendance_records")
      .select("*")
      .eq("employee_id", employeeId);

    if (attendanceError) {
      return new Response(
        JSON.stringify({ error: "Error retrieving attendance" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const completedTasks = tasks.filter((t) => t.status === "Completed").length;
    const totalTasks = tasks.length;
    const recentTasks = tasks
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
      .slice(0, 5);
    const presentCount = attendance.filter(
      (a) => a.attendance === "Present"
    ).length;

    const dashboardData = {
      total_tasks: totalTasks,
      completed_tasks: completedTasks,
      pending_tasks: totalTasks - completedTasks,
      recent_tasks: recentTasks,
      attendance_present: presentCount,
      total_attendance: attendance.length,
    };

    return new Response(JSON.stringify(dashboardData), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
