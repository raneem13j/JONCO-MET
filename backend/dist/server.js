"use strict";

var express = require('express');
//This line imports the Express.js library.
var mongoose = require('mongoose');
// This line imports the Mongoose library.
var dotenv = require('dotenv');
// This line imports the Dotenv library.
var servicesRoutes = require("./routes/services");
// This line imports a file containing routing logic for the "/services" endpoint path and assigns it to a constant variable named "servicesRoutes".
var projectsRoutes = require("./routes/projects");
// This line imports a file containing routing logic for the "/projects" endpoint path and assigns it to a constant variable named "projectsRoutes".
var clientsRoutes = require("./routes/clients");
// This line imports a file containing routing logic for the "/clients" endpoint path and assigns it to a constant variable named "clientsRoutes".
var contactsRoutes = require("./routes/contacts");
// This line imports a file containing routing logic for the "/contacts" endpoint path and assigns it to a constant variable named "contactsRoutes".
var adminRoutes = require("./routes/admin");
var authMiddleware = require("./utils/authMiddleware");
var adminController = require("./controllers/admin");
var cors = require('cors');
var bcrypt = require('bcryptjs');
var Admin = require("./models/admin");
var cookieparser = require('cookie-parser');
var jwt = require('jsonwebtoken');
var errorHandler = require("./utils/errorHandler");
// This line imports a file containing logic for handling errors and assigns it to a constant variable named "errorHandler".
var winston = require('winston');
//winston library for logging, which writes the logs in files.

var path = require('path');
//for deployment purposes

// const db = require('./config/db');
var app = express();
// This line creates an instance of the Express.js application.
require("./config/db");

// startttttttttttt  REGISTERR ADMIN

// Setting up middlewares to parse request body and cookies
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieparser());
var userCredentials = {
  username: 'admin',
  password: 'admin123',
  email: 'admin@gmail.com'
};
app.post('/login', function (req, res) {
  // Destructuring username & password from body
  var _req$body = req.body,
    username = _req$body.username,
    password = _req$body.password;

  // Checking if credentials match
  if (username === userCredentials.username && password === userCredentials.password) {
    //creating a access token
    var accessToken = jwt.sign({
      username: userCredentials.username,
      email: userCredentials.email
    }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '10m'
    });
    // Creating refresh token not that expiry of refresh 
    //token is greater than the access token

    var refreshToken = jwt.sign({
      username: userCredentials.username
    }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d'
    });

    // Assigning refresh token in http-only cookie 
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000
    });
    return res.json({
      accessToken: accessToken
    });
  } else {
    // Return unauthorized error if credentials don't match
    return res.status(406).json({
      message: 'Invalid credentials'
    });
  }
});
app.post('/refresh', function (req, res) {
  var _req$cookies;
  if ((_req$cookies = req.cookies) !== null && _req$cookies !== void 0 && _req$cookies.jwt) {
    // Destructuring refreshToken from cookie
    var refreshToken = req.cookies.jwt;

    // Verifying refresh token
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, function (err, decoded) {
      if (err) {
        // Wrong Refesh Token
        return res.status(406).json({
          message: 'Unauthorized'
        });
      } else {
        // Correct token we send a new access token
        var accessToken = jwt.sign({
          username: userCredentials.username,
          email: userCredentials.email
        }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '10m'
        });
        return res.json({
          accessToken: accessToken
        });
      }
    });
  } else {
    return res.status(406).json({
      message: 'Unauthorized'
    });
  }
});

// finishhhhh    REGISTERR ADMIN

// cant loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

// Middleware to accept requests from localhost:3000
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Middleware Function to authenticate the user
var auth = function auth(req, res, next) {
  console.log(req.body);
  if (req.body.logged) {
    next();
    return;
  }
  res.send({
    success: false,
    message: "Unauthorized Access"
  });
};

// Post request handler for the /admin route
app.post("/admin", auth, function (req, res) {
  res.send({
    success: true,
    message: "Successfully Authenticated"
  });
});

// cant loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

var _require = require('winston'),
  createLogger = _require.createLogger,
  format = _require.format,
  transports = _require.transports;
// This line imports specific functions from the winston library.
var combine = format.combine,
  timestamp = format.timestamp,
  label = format.label,
  printf = format.printf;
// This line imports specific functions from the format module of winston library.

dotenv.config();
// This line reads environment variables from a .env file and makes them available to the application.

var myFormat = printf(function (_ref) {
  var level = _ref.level,
    message = _ref.message,
    label = _ref.label,
    timestamp = _ref.timestamp;
  return "".concat(timestamp, " [").concat(label, "] ").concat(level, ": ").concat(message);
});
// This line creates a constant variable named "myFormat" which holds a custom log format function that takes an object with level, message, label, and timestamp properties and returns a string in the format of timestamp, label, level and message.

var logger = createLogger({
  // This line creates a constant variable named "logger" which holds a new winston logger object with the following options.
  format: combine(
  // This line sets the format option of the logger object to the result of combining the following formats.
  label({
    label: 'backend'
  }),
  // This line adds a label named "backend" to the log.
  timestamp(), myFormat
  //  This line adds the custom format function to the log.
  ),

  transports: [
  // This line sets the transports option of the logger object to an array containing the following transports.
  new transports.File({
    filename: 'error.log',
    level: 'error'
  }), new transports.File({
    filename: 'combined.log'
  })
  // This line creates a new File transport that writes all logs to a file named "combined.log".
  ]
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

app.get('/clients/:id', function (req, res) {
  Client.findById(req.params.id, function (err, client) {
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

__dirname = path.resolve();
if (process.env.NODE_ENV === 'prodction') {
  app.use(express["static"](path.join(__dirname, '/frontend/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', function (req, res) {
    res.send("API is running..");
  });
}

// ---------------------deployment--------------------

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});

// this script sets up a Node.js application using the Express.js framework, 
// connects to a MongoDB database using Mongoose, sets up routing for different endpoint paths, 
// sets up a custom error handler, sets up logging using winston library,
//  and starts the server on a specified port (or a default port of 3000).