const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    // image: { type: Buffer, required: true },
    // createdAt: { type: Date, default: Date.now }
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    timeStamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', serviceSchema);
