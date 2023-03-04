exports.refreshToken = async (req, res, next) => {
    try {
        // Get the token from the header
        const token = req.header('Authorization').replace('Bearer ', '');
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Create a new token with the same ID and an updated expiry time
        const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        req.headers.authorization = `Bearer ${newToken}`;
        next();
    } catch (err) {
        console.error(err.message);
        res.status(401).json({ message: 'Token is not valid' });
    }
};