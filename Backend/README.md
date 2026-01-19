# Employee Management System - Backend Setup

## Python Backend Setup

### Prerequisites
- Python 3.7 or higher installed

### Installation Steps

2. **Install required packages**
   "open new terminal Navigate the folder follow given below cmd"
   1. Create virtual environment
       cd Employee
       cd Backend
       python -m venv venv
   2. Activate virtual environment
       venv\Scripts\activate  
   3. Upgrade pip (optional but recommended)
       python -m pip install --upgrade pip    
   4. Install requirements
       pip install -r requirements.txt
   5. If you get the pkgutil error, upgrade Flask
       pip install --upgrade Flask==3.0.0
   6. Run the app
       python app.py

Frontend Run commands open new terminal Navigate the folder follow given below cmd

1.select new terminal
2.cd Employee
3.cd Frontend
4.cd Vite-project
5.npm install
6.npm run dev

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
