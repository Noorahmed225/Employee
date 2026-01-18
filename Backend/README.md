# Employee Management System - Backend Setup

## Python Backend Setup

### Prerequisites
- Python 3.7 or higher installed

### Installation Steps

1. **Navigate to Backend folder**
   ```
   cd Backend
   ```

2. **Install required packages**
   ```
   pip install -r requirements.txt
   ```

3. **Run the Flask server**
   ```
   python app.py
   ```

The server will start on `http://localhost:5000`

### How it works

- When users fill the Attendance form in the frontend and click Submit, the data is sent to the backend
- The backend receives the data and saves it to `attendance_data.json` file
- All attendance records are stored with a timestamp and unique ID

### API Endpoints

**POST /api/attendance**
- Save new attendance record
- Request body:
  ```json
  {
    "name": "Employee Name",
    "id": "12345",
    "date": "2024-01-19",
    "attendance": "Present"
  }
  ```

**GET /api/attendance**
- Retrieve all attendance records

### Output File
All attendance data is stored in `attendance_data.json` in the Backend folder.
