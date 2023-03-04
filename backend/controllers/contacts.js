const Contact = require('../models/Contact');

// Create a new contact
exports.create = (req, res, next) => {
    const newContact = new Contact(req.body);
    newContact.save()
        .then(contact => {
            res.json({ message: 'Contact created successfully' });
        })
        .catch(error => {
            next(error);
        });
};

// Get all contacts
exports.list = (req, res, next) => {
    Contact.find()
        .then(contacts => {
            res.json(contacts);
        })
        .catch(error => {
            next(error);
        });
};

// Get a single contact
exports.get = (req, res, next) => {
    Contact.findById(req.params.id)
        .then(contact => {
            if (!contact) {
                res.status(404).json({ message: 'Contact not found' });
            } else {
                res.json(contact);
            }
        })
        .catch(error => {
            next(error);
        });
};

// Update a contact
exports.update = (req, res, next) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(contact => {
            if (!contact) {
                res.status(404).json({ message: 'Contact not found' });
            } else {
                res.json({ message: 'Contact updated successfully' });
            }
        })
        .catch(error => {
            next(error);
        });
};

// Delete a contact
exports.delete = (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id)
    .then(contact => {
        if (!contact) {
            res.status(404).json({ message: 'Contact not found' });
        } else {
            res.json({ message: 'Contact deleted successfully' });
        }
    })
    .catch(error => {
        next(error);
    });
};
