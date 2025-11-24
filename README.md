# UserHub - User Management System

A full-stack REST API application built with Node.js, Express, MongoDB, and React for managing user data.

## Features

- ✅ **Full CRUD Operations** - Create, Read, Update, Delete users
- ✅ **ES6 Modules** - Modern JavaScript syntax throughout
- ✅ **Production-Ready Middleware** - Helmet, CORS, Morgan logging
- ✅ **MongoDB Integration** - Mongoose ODM with schema validation
- ✅ **React Frontend** - Modern UI with Tailwind CSS
- ✅ **Centralized Error Handling** - Consistent error responses
- ✅ **Development Workflow** - Single command to run both servers

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logging

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
UserHub/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main app component
│   │   └── index.css      # Tailwind styles
│   └── package.json
├── src/                   # Backend source
│   ├── config/           # Database configuration
│   ├── controllers/      # Request handlers
│   ├── middlewares/      # Custom middleware
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   └── index.js          # Server entry point
├── .env                  # Environment variables
├── .gitignore
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ujjwal705/UserHub.git
   cd UserHub
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=4000
   ```

5. **Run the application**
   ```bash
   npm run dev
   ```
   
   This will start both:
   - Backend server at `http://localhost:4000`
   - Frontend dev server at `http://localhost:5173`

## API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PATCH | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

### Request/Response Examples

**Create User (POST /api/users)**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "gender": "male",
  "jobTitle": "Developer"
}
```

**Response**
```json
{
  "message": "Success",
  "id": "507f1f77bcf86cd799439011"
}
```

## Scripts

```bash
npm run dev      # Run both frontend and backend
npm run server   # Run backend only
npm run client   # Run frontend only
npm start        # Run backend in production mode
```

## Middleware

- **Helmet** - Sets security-related HTTP headers
- **CORS** - Enables cross-origin requests
- **Morgan** - Logs HTTP requests
- **Error Handler** - Centralized error handling

## Database Schema

### User Model
```javascript
{
  firstName: String (required),
  lastName: String,
  email: String (required, unique),
  gender: String (required),
  jobTitle: String,
  timestamps: true
}
```

## Development

The project uses:
- **Nodemon** for backend auto-reload
- **Vite** for frontend hot module replacement
- **Concurrently** to run both servers simultaneously

## License

ISC

## Author

Ujjwal Raj
