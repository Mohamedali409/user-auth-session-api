# User Authentication API with Sessions

A RESTful API for user authentication using Node.js, Express, and Mongoose with session-based management.

## Features

- User registration with input validation using Joi
- Password hashing using bcrypt
- User login and session creation
- Logout and session destruction
- Protected routes accessible only for logged-in users
- Global error handling middleware

## Endpoints

| Method | Route              | Description                          |
| ------ | ------------------ | ------------------------------------ |
| POST   | /api/auth/register | Register a new user                  |
| POST   | /api/auth/login    | Authenticate user and create session |
| POST   | /api/auth/logout   | Logout and destroy session           |
| GET    | /api/users         | Get all users (protected route)      |

## Technologies

- Node.js
- Express.js
- MongoDB & Mongoose
- bcrypt
- express-session
- Joi

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Mohamedali409/user-auth-session-api.git
```
