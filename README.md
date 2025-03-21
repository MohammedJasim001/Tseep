# MERN Interview Task - Authentication & Test System

## Objective
A full-stack MERN application for user authentication (password-based) and an MCQ-based test with feedback submission.

## Features
- User Authentication (Register/Login with Mobile Number & Password)
- Token-based Authentication (JWT)
- User Role Selection (Student/Employee)
- 5-question Test Submission
- Calculate total marks and display them on the feedback screen (5 marks/question)
- Emoji-based Feedback
- Responsive UI with Tailwind CSS
- MERN Stack with RESTful APIs
- Database Storage in MongoDB

---

## Tech Stack

### Frontend (React.js)
- React.js (UI)
- Vite (Faster build)
- Tailwind CSS (Styling)
- React Router (Navigation)
- Form Validation (Formik/Yup)
- Axios for API requests
- TanStack Query (React Query for data fetching and state management)

### Backend (Node.js + Express.js)
- Express.js (RESTful APIs)
- MongoDB with Mongoose
- JWT Authentication
- bcrypt.js (Password Hashing)
- CORS & dotenv (Security)


---

## Task Breakdown

### 1. User Authentication
#### Registration Page
- Fields: Full Name, Email, Mobile Number, Current Status (Student/Employee), Password
- Password should be hashed before storing in the database using `bcrypt.js`
- User information should be saved in MongoDB.

#### Login Page
- Users login using Mobile Number & Password.
- Upon successful login, a JWT token is generated and stored in local storage.

### 2. Test Page
- The user takes a 10-question test.
- Each question has multiple-choice answers.
- Upon completion, show the score + feedback form.
- Save test results in the database.

### 3. Feedback System
- After completing the test, users submit emoji-based feedback.
- Store feedback in MongoDB.

---

## Other Instructions
- Ensure code is well-commented for clarity and maintainability.
- Upload the project to GitHub with a properly structured README file.
- If time permits, add test cases for critical functionalities.

## Frontend UI (React + Tailwind CSS)

### 1. Login & Register Pages
- Use Tailwind CSS/Bootstrap for a clean UI.
- Use `useForm` or other validation libraries like `Formik` and `Yup`.

### 2. Test Page
- Dynamic questions fetched from MongoDB.
- The user selects answers and submits.
- Display results with feedback emojis.

---

## Deployment
- **Frontend:** Vercel / Netlify
- **Backend:** Vercel / Netlify
- **Database:** MongoDB Atlas

## Timeline
- **Completion Deadline:** 2 Days

---

## Installation & Setup

### Clone the repository
```sh
git clone https://github.com/your-username/mern-auth-test.git
cd mern-auth-test
```

### Install dependencies
```sh
# Frontend
cd client
npm install
npm run dev
```
```sh
# Backend
cd server
npm install
npm start
```

### Environment Variables
Create a `.env` file in the `server` directory with the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## License
This project is open-source and free to use

