
// This script sets up routing for the '/clients' endpoint using the express.Router() module. It exports a router object that can be used in the main Express application to handle HTTP requests to this endpoint.

const express = require('express');
const router = express.Router();
// This line creates a new router object using the Router() method of the express module.
const servicesCtrl = require('../controllers/clients');
// This line imports the functions that handle CRUD operations for clients from the '../controllers/clients' file and assigns them to a constant variable named "servicesCtrl".

// Create a new service
router.post('/', servicesCtrl.create);
// This line sets up a route for the HTTP POST method on the '/clients' endpoint. The create function from the servicesCtrl variable will be invoked when this route is hit.

// Get all services
router.get('/', servicesCtrl.list);
// This line sets up a route for the HTTP GET method on the '/clients' endpoint. The list function from the servicesCtrl variable will be invoked when this route is hit.

// Get a single service
router.get('/:id', servicesCtrl.get);

// Update a service
router.put('/:id', servicesCtrl.update);

// Delete a service
router.delete('/:id', servicesCtrl.delete);

// This line sets up a route for the HTTP DELETE method on the '/clients/:id' endpoint. The delete function from the servicesCtrl variable will be invoked when this route is hit.

module.exports = router;
// This line exports the router object so that it can be used in the main Express application.
