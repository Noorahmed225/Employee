from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# File path for storing attendance data
ATTENDANCE_FILE = 'attendance_data.json'
TASKS_FILE = 'tasks_data.json'

# Initialize attendance file if it doesn't exist
def init_attendance_file():
    if not os.path.exists(ATTENDANCE_FILE):
        with open(ATTENDANCE_FILE, 'w') as f:
            json.dump([], f)

# Initialize tasks file if it doesn't exist
def init_tasks_file():
    if not os.path.exists(TASKS_FILE):
        with open(TASKS_FILE, 'w') as f:
            json.dump([], f)

# Load attendance data from file
def load_attendance_data():
    try:
        with open(ATTENDANCE_FILE, 'r') as f:
            return json.load(f)
    except:
        return []

# Save attendance data to file
def save_attendance_data(data):
    with open(ATTENDANCE_FILE, 'w') as f:
        json.dump(data, f, indent=2)

# Load tasks data from file
def load_tasks_data():
    try:
        with open(TASKS_FILE, 'r') as f:
            return json.load(f)
    except:
        return []

# Save tasks data to file
def save_tasks_data(data):
    with open(TASKS_FILE, 'w') as f:
        json.dump(data, f, indent=2)

# POST endpoint to save attendance
@app.route('/api/attendance', methods=['POST'])
def save_attendance():
    try:
        data = request.get_json()
        
        # Validate input
        if not all(key in data for key in ['name', 'id', 'date', 'attendance']):
            return jsonify({'error': 'All fields are required'}), 400
        
        # Load existing attendance data
        attendance_list = load_attendance_data()
        
        # Create new record
        new_record = {
            'id': len(attendance_list) + 1,
            'name': data['name'],
            'employee_id': data['id'],
            'date': data['date'],
            'attendance': data['attendance'],
            'created_at': datetime.now().isoformat()
        }
        
        # Add new record to list
        attendance_list.append(new_record)
        
        # Save to file
        save_attendance_data(attendance_list)
        
        return jsonify({'message': 'Attendance recorded successfully', 'record': new_record}), 200
    
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'error': 'Error saving attendance'}), 500

# GET endpoint to retrieve all attendance records
@app.route('/api/attendance', methods=['GET'])
def get_attendance():
    try:
        attendance_list = load_attendance_data()
        return jsonify(attendance_list), 200
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'error': 'Error retrieving attendance'}), 500

# POST endpoint to save tasks
@app.route('/api/tasks', methods=['POST'])
def save_task():
    try:
        data = request.get_json()
        
        # Validate input
        if not all(key in data for key in ['employee_name', 'employee_id', 'title', 'description']):
            return jsonify({'error': 'All fields are required'}), 400
        
        # Load existing tasks
        tasks_list = load_tasks_data()
        
        # Create new task
        new_task = {
            'id': len(tasks_list) + 1,
            'employee_name': data['employee_name'],
            'employee_id': data['employee_id'],
            'title': data['title'],
            'description': data['description'],
            'status': data.get('status', 'In Progress'),
            'created_at': datetime.now().isoformat(),
            'completed_at': data.get('completed_at', None)
        }
        
        # Add new task to list
        tasks_list.append(new_task)
        
        # Save to file
        save_tasks_data(tasks_list)
        
        return jsonify({'message': 'Task saved successfully', 'task': new_task}), 200
    
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'error': 'Error saving task'}), 500

# GET endpoint to retrieve all tasks
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    try:
        tasks_list = load_tasks_data()
        return jsonify(tasks_list), 200
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'error': 'Error retrieving tasks'}), 500

# GET endpoint to retrieve employee dashboard
@app.route('/api/dashboard/<employee_id>', methods=['GET'])
def get_dashboard(employee_id):
    try:
        tasks_list = load_tasks_data()
        attendance_list = load_attendance_data()
        
        # Filter tasks for the employee
        employee_tasks = [t for t in tasks_list if str(t['employee_id']) == str(employee_id)]
        
        # Filter attendance for the employee
        employee_attendance = [a for a in attendance_list if str(a['employee_id']) == str(employee_id)]
        
        # Count completed tasks
        completed_tasks = len([t for t in employee_tasks if t['status'] == 'Completed'])
        total_tasks = len(employee_tasks)
        
        # Get recent tasks (last 5)
        recent_tasks = sorted(employee_tasks, key=lambda x: x['created_at'], reverse=True)[:5]
        
        # Calculate attendance stats
        present_count = len([a for a in employee_attendance if a['attendance'] == 'Present'])
        
        dashboard_data = {
            'total_tasks': total_tasks,
            'completed_tasks': completed_tasks,
            'pending_tasks': total_tasks - completed_tasks,
            'recent_tasks': recent_tasks,
            'attendance_present': present_count,
            'total_attendance': len(employee_attendance)
        }
        
        return jsonify(dashboard_data), 200
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'error': 'Error retrieving dashboard data'}), 500

if __name__ == '__main__':
    init_attendance_file()
    init_tasks_file()
    app.run(debug=True, port=5000)
