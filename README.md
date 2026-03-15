# Backend Developer Assignment – Primetrade.ai

## Project Overview

This project implements a **scalable REST API with authentication and role-based access control** using **FastAPI and MongoDB**.
It allows users to register, login using JWT authentication, and manage tasks through secure CRUD APIs.

The backend follows a **modular and scalable architecture**, making it easy to extend with new modules and features.

---

# Tech Stack

**Backend**

* FastAPI
* Python
* MongoDB
* JWT Authentication
* Passlib (bcrypt hashing)

**Tools**

* Uvicorn
* Swagger API Documentation
* GitHub

---

# Features

### Authentication

* User Registration
* User Login
* Password hashing using bcrypt
* JWT token generation
* Secure protected routes

### Role-Based Access Control

Two roles supported:

| Role  | Access                      |
| ----- | --------------------------- |
| User  | Manage only their own tasks |
| Admin | Manage all tasks            |

---

### Task Management (CRUD)

Authenticated users can:

* Create tasks
* View tasks
* Update tasks
* Delete tasks

Admins can access all tasks in the system.

---

# API Endpoints

## Authentication

### Register User

POST `/api/v1/auth/register`

Request:

```
{
 "name": "Abhijeet",
 "email": "test@gmail.com",
 "password": "123456"
}
```

---

### Login User

POST `/api/v1/auth/login`

Response:

```
{
 "access_token": "JWT_TOKEN",
 "token_type": "bearer"
}
```

---

# Protected Routes

JWT token required in header:

```
Authorization: Bearer <token>
```

---

# Task APIs

### Create Task

POST `/api/v1/tasks`

```
{
 "title": "Build Backend",
 "description": "Complete FastAPI assignment"
}
```

---

### Get Tasks

GET `/api/v1/tasks`

Returns tasks belonging to the user.

---

### Update Task

PUT `/api/v1/tasks/{task_id}`

---

### Delete Task

DELETE `/api/v1/tasks/{task_id}`

---

# API Documentation

FastAPI automatically generates API docs.

Swagger UI:

```
http://localhost:8000/docs
```

ReDoc:

```
http://localhost:8000/redoc
```

---

# Project Structure

```
app
│
├── config
│   └── database.py
│
├── controllers
│   ├── auth_controller.py
│   └── task_controller.py
│
├── middleware
│   └── auth_middleware.py
│
├── models
│   ├── user_model.py
│   └── task_model.py
│
├── routes
│   ├── auth_routes.py
│   └── task_routes.py
│
└── main.py
```

---

# Installation & Setup

### Clone the repository

```
git clone <your-repo-url>
cd primetrade-backend-assignment
```

---

### Create virtual environment

```
python -m venv venv
```

Activate:

Windows

```
venv\Scripts\activate
```

Mac/Linux

```
source venv/bin/activate
```

---

### Install dependencies

```
pip install -r requirements.txt
```

---

### Run the server

```
uvicorn app.main:app --reload
```

Server runs on:

```
http://127.0.0.1:8000
```

---

# Security Practices

* Password hashing using bcrypt
* JWT authentication
* Protected routes with dependency injection
* Role-based access control
* Input validation with Pydantic

---

# Scalability Considerations

The backend is designed with scalability in mind:

Future improvements may include:

* Redis caching for frequently accessed data
* Microservices architecture
* Load balancing
* Docker containerization
* Centralized logging

---

# Author

Abhijeet Soni
MERN Stack & Backend Developer
