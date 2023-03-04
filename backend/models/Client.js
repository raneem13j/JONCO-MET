const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    category_name: { type: String, required: true },
    client_name: { type: String, required: true },
    client_city: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now },
    timeStamp: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Client', clientSchema);
