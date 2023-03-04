// This script exports multiple functions that handle CRUD (create, read, update, and delete) operations for clients using a Mongoose model named "Client".



const Client = require('../models/Client');
// This line imports the Client model from the '../models/Client' file and assigns it to a constant variable named "Client".

// Create a new client
exports.create = (req, res, next) => {
    // This line exports a function named "create" that takes in request, response, and next objects.
    const newClient = new Client(req.body);
    // This line creates a new instance of the Client model using the data from the request body and assigns it to a constant variable named "newClient".
    newClient.save()
    // This line saves the new client instance to the database.
        .then(client => {
            res.json({ message: 'Client created successfully' });
        })
        // This line sets up a callback function to execute if the save operation is successful.
        .catch(error => {
            // This line sets up a callback function to execute if the save operation encounters an error.
            next(error);
            // This line passes the error to the next middleware function for handling.
        });
};

// Get all clients
exports.list = (req, res, next) => {
    Client.find()
        .then(clients => {
            res.json(clients);
        })
        .catch(error => {
            next(error);
        });
};

// Get a single client
exports.get = (req, res, next) => {
    Client.findById(req.params.id)
        .then(client => {
            if (!client) {
                res.status(404).json({ message: 'Client not found' });
            } else {
                res.json(client);
            }
        })
        .catch(error => {
            next(error);
        });
};

// Update a client
exports.update = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'Client ID is required' });
    }
    Client.findByIdAndUpdate(id, req.body, { new: true })
        .then(client => {
            if (!client) {
                res.status(404).json({ message: 'Client not found' });
            } else {
                res.json({ message: 'Client updated successfully' });
            }
        })
        .catch(error => {
            next(error);
        });
};


// Delete a client
exports.delete = (req, res, next) => {
    Client.findByIdAndRemove(req.params.id)
        .then(client => {
            if (!client) {
                res.status(404).json({ message: 'Client not found' });
            } else {
                res.json({ message: 'Client deleted successfully' });
            }
        })
        .catch(error => {
            next(error);
        });
};
    
   