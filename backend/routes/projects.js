

const express = require('express');
const router = express.Router();
const servicesCtrl = require('../controllers/projects');

// Create a new service
router.post('/', servicesCtrl.create);

// Get all services
router.get('/', servicesCtrl.list);

// Get a single service
router.get('/:id', servicesCtrl.get);

// Update a service
router.put('/:id', servicesCtrl.update);

// Delete a service
router.delete('/:id', servicesCtrl.delete);

module.exports = router;
