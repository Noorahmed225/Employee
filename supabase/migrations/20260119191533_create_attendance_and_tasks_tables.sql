/*
  # Employee Management System Database Schema

  1. New Tables
    - `attendance_records`
      - `id` (bigint, primary key, auto-increment)
      - `name` (text) - Employee name
      - `employee_id` (text) - Employee ID number
      - `date` (date) - Attendance date
      - `attendance` (text) - Attendance status (Present, Absent, Leave)
      - `created_at` (timestamptz) - Timestamp when record was created
    
    - `tasks`
      - `id` (bigint, primary key, auto-increment)
      - `employee_name` (text) - Employee name
      - `employee_id` (text) - Employee ID number
      - `title` (text) - Task title
      - `description` (text) - Task description
      - `status` (text) - Task status (In Progress, Completed, Pending)
      - `created_at` (timestamptz) - Timestamp when task was created
      - `completed_at` (timestamptz, nullable) - Timestamp when task was completed

  2. Security
    - Enable RLS on both tables
    - Add public access policies for demo purposes (can be restricted later)
    
  3. Indexes
    - Index on employee_id for faster lookups
    - Index on date for attendance queries
*/

-- Create attendance_records table
CREATE TABLE IF NOT EXISTS attendance_records (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  employee_id text NOT NULL,
  date date NOT NULL,
  attendance text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
  id bigserial PRIMARY KEY,
  employee_name text NOT NULL,
  employee_id text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  status text DEFAULT 'In Progress',
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Enable RLS
ALTER TABLE attendance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_attendance_employee_id ON attendance_records(employee_id);
CREATE INDEX IF NOT EXISTS idx_attendance_date ON attendance_records(date);
CREATE INDEX IF NOT EXISTS idx_tasks_employee_id ON tasks(employee_id);

-- Public access policies (for demo purposes)
-- In production, these should be restricted to authenticated users

CREATE POLICY "Allow public read access to attendance"
  ON attendance_records FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to attendance"
  ON attendance_records FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public read access to tasks"
  ON tasks FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to tasks"
  ON tasks FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to tasks"
  ON tasks FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);