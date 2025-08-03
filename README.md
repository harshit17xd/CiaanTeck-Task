# 🌐 Mini LinkedIn Community Platform

A **Mini LinkedIn-like community platform** built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**.  
Users can **register, log in, create posts, and view profiles** in a simple, interactive social feed.

---

## 🚀 Features

### 🔐 User Authentication
- Register and Login with email & password  
- Secure password storage using bcrypt  
- JWT-based authentication for protected routes  

### 📝 Public Post Feed
- Create and view **text-only posts**  
- Each post displays **author name and timestamp**  
- Posts are visible to all users  

### 👤 Profile Page
- View **own profile** with bio and email  
- Visit **other users' profiles** and see their posts  

### ⚡ Tech Stack
- **Frontend:** React + React Router  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Atlas)  
- **Hosting:** Vercel (Frontend & Backend)  


---

## 🔧 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/mini-linkedin.git
cd mini-linkedin
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` folder:

```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

- Start backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

- Runs the React app on [http://localhost:3000](http://localhost:3000)  

---




