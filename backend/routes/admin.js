const express = require('express');

const router = express.Router();

const { loginAdmin, getMe, createAdmin } = require('../controllers/admin');

const {protect} = require('../utils/authMiddleware');


router.post('/create', createAdmin);

router.post('/login', loginAdmin);
router.get('/me', protect, getMe);
// const { protect } = require('../middleware/authMiddleware');

// router.get('/admin/services', authMiddleware, adminController.getServices);
// register
// router.post('/register', protect, adminController.register); 




// const refreshToken = require('../utils/refreshTokenMiddleware').refreshToken;

// router.post('/register', adminController.register, refreshToken);
// router.post('/login', adminController.login, refreshToken);






// const admin = require('./admin');
// const refreshToken = require('../utils/authMiddleware').refreshToken;

// router.post('/register', admin.register, refreshToken);
// router.post('/login', admin.login, refreshToken);
// router.post('/logout', admin.logout);


// const { register, login, logout } = require('./admin');
// const authMiddleware = require('../utils/authMiddleware');

// router.post('/admin/register', register, refreshToken);
// router.post('/admin/login', login, refreshToken);
// router.post('/admin/logout', authMiddleware, logout);








// login
// router.post('/login', adminController.login);
// logout
// router.get('/admin/logout', protect, adminController.logout);
// CRUD operations for services
// router.get('/admin/services', authMiddleware, adminController.getServices);
// router.post('/admin/services', authMiddleware, adminController.addService);
// router.put('/admin/services/:id', authMiddleware, adminController.updateService);
// router.delete('/admin/services/:id', authMiddleware, adminController.deleteService);
// CRUD operations for projects
// router.get('/admin/projects', authMiddleware, adminController.getProjects);
// router.post('/admin/projects', authMiddleware, adminController.addProject);
// router.put('/admin/projects/:id', authMiddleware, adminController.updateProject);
// router.delete('/admin/projects/:id', authMiddleware, adminController.deleteProject);
// CRUD operations for clients
// router.get('/admin/clients', authMiddleware, adminController.getClients);
// router.post('/admin/clients', authMiddleware, adminController.addClient);
// router.put('/admin/clients/:id', authMiddleware, adminController.updateClient);
// router.delete('/admin/clients/:id', authMiddleware, adminController.deleteClient);
// update contact information
// router.put('/admin/contact', authMiddleware, adminController.updateContact);
// get statistics
// router.get('/admin/statistics', authMiddleware, adminController.getStatistics);
// update password
// router.put('/admin/password', authMiddleware, adminController.updatePassword);
// delete account
// router.delete('/admin/account', authMiddleware, adminController.deleteAccount);
// export the router
module.exports = router;
