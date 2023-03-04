const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    modalimg: {type: Array, required: true},
    // description: { type: String, required: true },
    // client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    services: [{ type: Array, required: true}],
    timeStamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);