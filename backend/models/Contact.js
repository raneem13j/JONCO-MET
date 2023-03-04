const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now }
    timeStamp: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Contact', contactSchema);
