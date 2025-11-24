import express from 'express'; // Importing Express framework
// load environment variables from .env (if present)
import 'dotenv/config';

import { connectMongoDB } from './config/db.js'; // MongoDB connection function

import { securityMiddleware, corsMiddleware, loggingMiddleware, errorHandler } from './middlewares/index.js';

import userRouter from './routes/user.route.js'; // User routes

const app = express(); // Initializing Express app
const PORT = process.env.PORT || 4000; // Server port

// Middlewares
app.use(securityMiddleware); // Security headers (helmet)
app.use(corsMiddleware); // Enable CORS for frontend
app.use(loggingMiddleware); // Log HTTP requests (morgan)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// User routes
app.use('/api/users', userRouter);

// Error handling middleware (must be after routes)
app.use(errorHandler);

// Start server after DB connection succeeds
(async function start() {
  try {
    await connectMongoDB();
    app.listen(PORT, () =>
      console.log(`🚀 Server is running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('Failed to start server due to DB connection error:', err);
    process.exit(1);
  }
})();
