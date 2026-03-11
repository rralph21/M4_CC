import express from "express";
import projectRoutes from "./api/v1/routes/projectRoutes";
import {
    accessLogger,
    errorLogger,
    consoleLogger,
} from "./api/v1/middleware/logger";
import errorHandler from "./api/v1/middleware/errorHandler";
import adminRoutes from "./api/v1/routes/adminRoutes";

const app = express();

// Logging middleware (should be applied early in the middleware stack)
if (process.env.NODE_ENV === "production") {
    // In production, log to files
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    // In development, log to console for immediate feedback
    app.use(consoleLogger);
}

// Body parsing middleware
app.use(express.json());

// API Routes
app.use("/api/v1", projectRoutes);
app.use("/api/v1", adminRoutes);


app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

// Global error handling middleware (MUST be applied last)
app.use(errorHandler);

export default app;