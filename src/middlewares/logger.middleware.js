import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

// Security middleware
export const securityMiddleware = helmet();

// CORS middleware
export const corsMiddleware = cors();

// Logging middleware
export const loggingMiddleware = morgan('dev');

// Error handling middleware
export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};
