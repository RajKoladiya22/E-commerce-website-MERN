const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const cors = require('cors');
const loginRoutes = require('./routes/loginRoutes');
const PostRoutes = require('./routes/PostRoutes');
const GetRoutes = require('./routes/GetRoutes');

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/', loginRoutes);
app.use('/', PostRoutes);
app.use('/', GetRoutes);

// Start server
app.listen(port, (err) => {
    if (err) {
        console.error('Server startup error:', err);
        return;
    }
    console.log(`Server is running on Port: ${port}`);
});
