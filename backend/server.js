const express = require('express');
//This line imports the Express.js library.
const mongoose = require('mongoose');
// This line imports the Mongoose library.
const dotenv = require('dotenv');
// This line imports the Dotenv library.
const servicesRoutes = require('./routes/services');
// This line imports a file containing routing logic for the "/services" endpoint path and assigns it to a constant variable named "servicesRoutes".
const projectsRoutes = require('./routes/projects');
// This line imports a file containing routing logic for the "/projects" endpoint path and assigns it to a constant variable named "projectsRoutes".
const clientsRoutes = require('./routes/clients');
// This line imports a file containing routing logic for the "/clients" endpoint path and assigns it to a constant variable named "clientsRoutes".
const contactsRoutes = require('./routes/contacts');
// This line imports a file containing routing logic for the "/contacts" endpoint path and assigns it to a constant variable named "contactsRoutes".
const adminRoutes = require('./routes/admin');
const authMiddleware = require('./utils/authMiddleware');
const adminController = require('./controllers/admin');
const cors = require('cors');

const bcrypt = require('bcryptjs');
const Admin = require('./models/admin');

const cookieparser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const errorHandler = require('./utils/errorHandler');
// This line imports a file containing logic for handling errors and assigns it to a constant variable named "errorHandler".
const winston = require('winston');
//winston library for logging, which writes the logs in files.

const path = require('path');
//for deployment purposes


// const db = require('./config/db');
const app = express();
// This line creates an instance of the Express.js application.
require('./config/db');


// startttttttttttt  REGISTERR ADMIN

// Setting up middlewares to parse request body and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());

const userCredentials = {
    username: 'admin',
    password: 'admin123',
    email: 'admin@gmail.com'
}

app.post('/login', (req, res) => {
    // Destructuring username & password from body
    const { username, password } = req.body;

    // Checking if credentials match
    if (username === userCredentials.username && 
        password === userCredentials.password) {
        
        //creating a access token
        const accessToken = jwt.sign({
            username: userCredentials.username,
            email: userCredentials.email
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '10m'
        });
        // Creating refresh token not that expiry of refresh 
        //token is greater than the access token
        
        const refreshToken = jwt.sign({
            username: userCredentials.username,
        }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

        // Assigning refresh token in http-only cookie 
        res.cookie('jwt', refreshToken, { httpOnly: true, 
            sameSite: 'None', secure: true, 
            maxAge: 24 * 60 * 60 * 1000 });
        return res.json({ accessToken });
    }
    else {
        // Return unauthorized error if credentials don't match
        return res.status(406).json({ 
            message: 'Invalid credentials' });
    }
})

app.post('/refresh', (req, res) => {
    if (req.cookies?.jwt) {

        // Destructuring refreshToken from cookie
        const refreshToken = req.cookies.jwt;

        // Verifying refresh token
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, 
        (err, decoded) => {
            if (err) {

                // Wrong Refesh Token
                return res.status(406).json({ message: 'Unauthorized' });
            }
            else {
                // Correct token we send a new access token
                const accessToken = jwt.sign({
                    username: userCredentials.username,
                    email: userCredentials.email
                }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '10m'
                });
                return res.json({ accessToken });
            }
        })
    } else {
        return res.status(406).json({ message: 'Unauthorized' });
    }
})



// finishhhhh    REGISTERR ADMIN

// cant loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn



// Middleware to accept requests from localhost:3000
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
);
 
// Middleware Function to authenticate the user
const auth = (req, res, next) => {
    console.log(req.body);
    if(req.body.logged){
        next();
        return;
    }
    res.send({
        success: false,
        message: "Unauthorized Access"
    });
}
 
// Post request handler for the /admin route
app.post("/admin", auth, (req, res) => {
    res.send({
        success: true,
        message: "Successfully Authenticated"
    });
})










// cant loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

const { createLogger, format, transports } = require('winston');
// This line imports specific functions from the winston library.
const { combine, timestamp, label, printf } = format;
// This line imports specific functions from the format module of winston library.



dotenv.config();
// This line reads environment variables from a .env file and makes them available to the application.



const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
// This line creates a constant variable named "myFormat" which holds a custom log format function that takes an object with level, message, label, and timestamp properties and returns a string in the format of timestamp, label, level and message.

const logger = createLogger({
    // This line creates a constant variable named "logger" which holds a new winston logger object with the following options.
    format: combine(
        // This line sets the format option of the logger object to the result of combining the following formats.
        label({ label: 'backend' }),
        // This line adds a label named "backend" to the log.
        timestamp(),
        myFormat
        //  This line adds the custom format function to the log.
    ),
    transports: [
        // This line sets the transports option of the logger object to an array containing the following transports.
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
        // This line creates a new File transport that writes all logs to a file named "combined.log".
    ],
});
app.use(cors());

app.use(express.json());
// This line tells the Express.js application to parse incoming JSON data from HTTP request bodies.
app.use('/services', servicesRoutes);
// This line tells the Express.js application to use the routing logic for the "/services" endpoint path that was imported earlier.
app.use('/projects', projectsRoutes);
// This line tells the Express.js application to use the routing logic for the "/projects" endpoint path that was imported earlier.
app.use('/clients', clientsRoutes);
app.use('/contacts', contactsRoutes);
// app.use('/admin', adminRoutes);
// app.use('/admin', authMiddleware, adminRoutes);
app.use('/admin', adminRoutes);

// app.post('/register', adminController.register);

// This line tells the Express.js application to use the routing logic for the "/admin"
app.use(errorHandler);
//This line tells the Express.js application to use the custom error handler logic that was imported earlier.

app.get('/clients/:id', (req, res) => {
    Client.findById(req.params.id, (err, client) => {
      if (err) {
        return res.status(404).json({
          error: 'Client not found'
        });
      }
      res.json(client);
    });
  });   


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //This will allow requests from any origin to be processed by your server. If you want to restrict this to specific origins, you can replace the * with a comma-separated list of allowed origin URLs.

// ---------------------deployment--------------------


__dirname =path.resolve();
if(process.env.NODE_ENV==='prodction'){
app.use(express.static(path.join(__dirname,'/frontend/build')));
app.get('*', (req,res) => {
res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
});
} else{
app.get('/',(req, res)=>{
    res.send("API is running..");
});
}






// ---------------------deployment--------------------

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// this script sets up a Node.js application using the Express.js framework, 
// connects to a MongoDB database using Mongoose, sets up routing for different endpoint paths, 
// sets up a custom error handler, sets up logging using winston library,
//  and starts the server on a specified port (or a default port of 3000).