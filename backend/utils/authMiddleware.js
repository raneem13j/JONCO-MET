

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) {
        return res.status(401).json({
            message: 'Access denied. No token provided.'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }
};


// const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Admin = require('../models/admin');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //get token from header
      token = req.headers.authorization.split(' ')[1];

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //get admin from token
      req.admin = await Admin.findById(decoded.admin).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.send({ status: 401, message: 'Not authorized, no token' });
    }
  }

  if (!token) {
    res.send({ status: 401, message: 'Not authorized, no token' });
  }
});

module.exports = { protect };
//Bearer ndjcd






