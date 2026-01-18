from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# File path for storing attendance data
ATTENDANCE_FILE = 'attendance_data.json'

# Initialize attendance file if it doesn't exist
def init_attendance_file():
    if not os.path.exists(ATTENDANCE_FILE):
        with open(ATTENDANCE_FILE, 'w') as f:
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

if __name__ == '__main__':
    init_attendance_file()
    app.run(debug=True, port=5000)
