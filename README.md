# OpenAGI_project_1
This is the OpenAGI project. It is a full-stack application with a frontend 
built using React and a backend built using FastAPI.

## Project Structure
openagi-project/
├── backend/

│ ├── init.py
│ ├── database.py
│ ├── main.py
│ ├── models.py
│ ├── routers/
│ │ ├── init.py
│ │ ├── components.py
│ ├── schemas.py
├── frontend/
│ ├── public/
│ │ ├── index.html
│ └── src/
│ ├── components/
│ │ ├── MainContent.js
│ ├── App.js
│ ├── index.js
│ ├── package.json
├── .gitignore
└── README.md


## Setup Instructions

### BACKEND

1. **Navigate to the `backend` directory:**

   ```sh
   cd backend
2. Create a virtual environment:

python -m venv venv

3. Activate the virtual environment:

On Windows:venv\Scripts\activate
On macOS and Linux:source venv/bin/activate 

4. Install the dependencies:pip install -r requirements.txt

5. Start the FastAPI server: uvicorn main:app --reload


### FRONTEND

1. Navigate to the frontend directory: cd frontend

2. Install the dependencies:npm install 

3. Start the React development server: npm start

Usage
Interacting with the Application
Frontend: The frontend can be accessed via http://localhost:3000.
Backend: The backend API can be accessed via http://localhost:8000
