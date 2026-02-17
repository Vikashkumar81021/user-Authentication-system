# 🔐 JWT Authentication API

A secure RESTful Authentication API built using Node.js, Express, MongoDB, and JWT.

This project demonstrates complete authentication flow including user registration, login, JWT-based authorization, and protected routes.

---

## 🚀 Features

- User Registration (Signup API)
- Input Validation
- Password Hashing using bcrypt
- Duplicate User Prevention
- Login with Credential Verification
- JWT Token Generation
- JWT Authentication Middleware
- Protected Route Access
- Secure Error Handling
- Environment Variable Configuration

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcrypt
- dotenv

---

## 📁 Project Structure

```
src/
 ├── app.js
 ├── index.js
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
.env
package.json
README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
ACCESS_TOKEN_SECRET=test123
ACCESS_TOKEN_EXPIRY=1h
MONGODB_URL=mongodb://localhost:27017
PORT=3000
```

---

## 📦 Installation

1. Clone the repository
2. Install dependencies
3. Configure environment variables
4. Start the server

```
npm install
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

# 📌 API Documentation

Base URL:

```
/api/v1/users
```

---

## 1️⃣ Register User

**Endpoint:**  
`POST /register`

**Description:**  
Creates a new user after validating input and hashing the password.

**Validations:**

- All fields required
- Email must be unique
- Password securely hashed before saving

---

## 2️⃣ Login User

**Endpoint:**  
`POST /login`

**Description:**  
Verifies user credentials and generates a JWT token.

**Security:**

- Password compared using bcrypt
- Token signed using secret from environment variable
- Token expiry configured

---

## 🔐 JWT Authentication Middleware

- Extracts token from `Authorization` cookies
- Verifies token validity
- Attaches user data to request object
- Blocks access if token is invalid or expired

Header Format:

```
Authorization: Bearer <token>
```

---

## 3️⃣ Protected Profile Route

**Endpoint:**  
`GET /users
**Description:**  
Returns authenticated user data.

**Security Rules:**

- Accessible only with valid JWT
- Password field excluded from response
- Unauthorized requests are rejected

---

# ❌ Error Handling

The API properly handles:

- Missing fields
- Duplicate registration
- Invalid credentials
- Expired token
- Invalid token
- Server errors

All responses return proper HTTP status codes and structured JSON messages.

---

# 🔒 Security Measures

- Password hashing using bcrypt
- JWT expiration enabled
- Sensitive fields excluded from responses
- Environment variables used for secrets
- Centralized error handling
- Protected routes using middleware

---

# 📤 Deployment Steps

1. Initialize Git repository
2. Push code to GitHub
3. Add proper `.gitignore`
4. Do not expose environment secrets
