const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

const app = express();

const PORT = 3000;

// Read JSON data
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Student routes
app.use("/students", studentRoutes);

// Invalid route handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});