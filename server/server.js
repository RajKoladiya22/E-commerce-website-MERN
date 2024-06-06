const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const cors = require('cors');
const loginRoutes = require('./routes/loginRoutes');
const PostRoutes = require('./routes/PostRoutes');
const GetRoutes = require('./routes/GetRoutes');
const DeleteRoutes = require('./routes/DeleteRoutes');
const UpdateRoutes = require('./routes/UpdateRoutes');


dotenv.config();

const port = process.env.PORT || 8000;

const app = express();



const cloudinary = require('cloudinary').v2



    // Configuration
    cloudinary.config({ 
        cloud_name: "dwis9d8at", 
        api_key: "539439514954282", 
        api_secret: "5qDYQ-7q7GcI4Hm6wXgbxNFLXAI" // Click 'View Credentials' below to copy your API secret
    });
    
    

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/', loginRoutes);
app.use('/', PostRoutes);
app.use('/', GetRoutes);
app.use('/', DeleteRoutes);
app.use('/', UpdateRoutes);

// Start server
app.listen(port, (err) => {
    if (err) {
        console.error('Server startup error:', err);
        return;
    }
    console.log(`Server is running on Port: ${port}`);
});
