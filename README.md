# UserHub - User Management System

A full-stack REST API application built with Node.js, Express, MongoDB, and React for managing user data.

## Features

- ✅ **Full CRUD Operations** - Complete set of endpoints for user management
- ✅ **Modern JavaScript** - Built with ES6+ features and modules
- ✅ **Production-Ready**
  - Security headers with Helmet
  - CORS protection
  - Rate limiting
  - Request logging with Morgan
- ✅ **Database**
  - MongoDB with Mongoose ODM
  - Schema validation
  - Indexes for better performance
- ✅ **Frontend**
  - Responsive design with Tailwind CSS
  - Modern React with functional components and hooks
  - Client-side form validation
  - Loading and error states
- ✅ **Developer Experience**
  - Hot module replacement (HMR)
  - ESLint for code quality
  - Environment-based configuration
  - Comprehensive error handling

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logging
- **Express Validator** - Request validation
- **Dotenv** - Environment variables
- **Nodemon** - Development server

### Frontend
- **React 18** - UI library with hooks
- **Vite** - Next generation frontend tooling
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling
- **React Query** - Data fetching and caching
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **Postman/Insomnia** - API testing

## Project Structure

```
UserHub/
├── client/                 # React frontend
│   ├── public/             # Static files
│   ├── src/
│   │   ├── assets/        # Images, fonts, etc.
│   │   ├── components/    # Reusable React components
│   │   ├── contexts/      # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Application entry point
│   │   └── index.css      # Global styles
│   ├── .eslintrc.cjs      # ESLint configuration
│   ├── index.html         # HTML template
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
│
├── src/                   # Backend source
│   ├── config/           # Configuration files
│   │   └── db.js        # Database connection
│   ├── controllers/      # Request handlers
│   │   └── user.js      # User controller
│   ├── middlewares/      # Custom middleware
│   │   ├── error.js     # Error handling
│   │   └── validate.js  # Request validation
│   ├── models/           # Mongoose schemas
│   │   └── user.js      # User model
│   ├── routes/           # API routes
│   │   └── user.js      # User routes
│   ├── utils/            # Utility functions
│   ├── validators/       # Validation schemas
│   ├── index.js          # Server entry point
│   └── server.js         # Express server setup
│
├── .env                  # Environment variables
├── .env.example          # Example environment variables
├── .eslintrc.json        # ESLint configuration
├── .gitignore
├── package.json          # Backend dependencies and scripts
└── README.md             # This file
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (v7 or higher) or yarn (v1.22 or higher)
- MongoDB (v5.0 or higher) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) for a cloud database
- Git (for version control)

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
   # Server Configuration
   PORT=4000
   NODE_ENV=development
   
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string
   
   # CORS (optional)
   FRONTEND_URL=http://localhost:5173
   
   # Rate Limiting (optional)
   RATE_LIMIT_WINDOW_MS=900000  // 15 minutes
   RATE_LIMIT_MAX_REQUESTS=100  // Limit each IP to 100 requests per window
   ```
   
   For production, make sure to set `NODE_ENV=production` and configure appropriate security settings.

5. **Run the application**
   
   **Development mode** (with hot-reload):
   ```bash
   # Start both frontend and backend with a single command
   npm run dev
   ```
   
   **Production mode**:
   ```bash
   # Build the React app
   cd client
   npm run build
   
   # Start the production server
   cd ..
   npm start
   ```
   
   **Running in development mode will start:**
   - Backend server at `http://localhost:4000`
   - Frontend dev server at `http://localhost:5173` (auto-opens in browser)
   
   **Running in production mode will serve the React app from the backend at:**
   - `http://localhost:4000`

## API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/users | Get all users |
| GET    | /api/users/:id | Get a single user |
| POST   | /api/users | Create a new user |
| PUT    | /api/users/:id | Update a user |
| DELETE | /api/users/:id | Delete a user |

### Request/Response Examples

**Create User**
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

**Response**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "createdAt": "2023-11-24T06:30:00.000Z",
  "updatedAt": "2023-11-24T06:30:00.000Z"
}
```

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
