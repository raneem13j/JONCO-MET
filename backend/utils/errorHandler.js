module.exports = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        err.statusCode = 400;
        err.message = 'Validation Error';
    }

    if (err.name === 'MongoError' && err.code === 11000) {
        err.statusCode = 400;
        err.message = 'Duplicate Key Error';
    }

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Server Error'
    });
};
