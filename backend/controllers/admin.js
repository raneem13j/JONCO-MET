// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Admin = require('../models/admin');
// const express = require('express');
// const app = express();
// const dotenv = require('dotenv');
// const cookieparser = require('cookie-parser');
// const bodyParser = require('body-parser');


// dotenv.config();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieparser());

// exports.register = async (req, res, next) => {
// try {
// const { username, password } = req.body;
// const admin = await Admin.findOne({ username });
// if (admin) {
// return res.status(400).json({ error: 'Admin already exists' });
// }
// const hashedPassword = await bcrypt.hash(password, 10);
// const user = await Admin.create({ username, password: hashedPassword });
// const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// res.status(201).json({ token, user });
// } catch (error) {
// next(error);
// }
// };

// exports.login = async (req, res) => {
// try {
// const { username, password } = req.body;
// const admin = await Admin.findOne({ username });
// if (!admin) {
// return res.status(401).json({ message: 'Invalid credentials' });
// }
// const isMatch = await bcrypt.compare(password, admin.password);
// if (!isMatch) {
// return res.status(401).json({ message: 'Invalid credentials' });
// }
// const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
// console.log("token ",token)
// res.json({ token });
// } catch (err) {
// console.error("Error ",err.message);
// res.status(500).send('Server error');
// }
// };


// exports.logout = async (req, res) => {
//     try {
//     // Clear the refresh token in the cookie
//     res.clearCookie('jwt');
//     // Return success message
//     res.json({ message: 'Logged out successfully' });
//     } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//     }
//     };
    
//     app.post('/login', async (req, res) => {
//     try {
//     const { username, password } = req.body;
//     // Find the admin in the database
//     const admin = await Admin.findOne({ username });
//     if (!admin) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     // Compare the password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     // Create an access token and refresh token
//     const accessToken = jwt.sign({ id: admin._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
//     const refreshToken = jwt.sign({ id: admin._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
//     // Store the refresh token in the cookie
//     res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
//     res.json({ accessToken });
//     } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//     }
//     });
    
//     app.post('/refresh', async (req, res) => {
//     try {
//     // Get the refresh token from the cookie
//     const refreshToken = req.cookies.jwt;
//     if (!refreshToken) {
//     return res.status(401).json({ message: 'Unauthorized' });
//     }
//     // Verify the refresh token
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//     if (err) {
//     return res.status(401).json({ message: 'Unauthorized' });
//     }
//     // Create a new access token
//     const accessToken = jwt.sign({ id: decoded.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
//     res.json({ accessToken });
//     });
//     } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//     }
//     });








    
// exports.getServices = async (req, res) => {
//     try {
//         const services = await Service.find();
//         res.json(services);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.addService = async (req, res) => {
//     try {
//         const { name, description, images } = req.body;
//         const service = new Service({ name, description, images });
//         await service.save();
//         res.json({ message: 'Service added successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.updateService = async (req, res) => {
//     try {
//         const { name, description, images } = req.body;
//         const service = await Service.findByIdAndUpdate(req.params.id, { name, description, images }, { new: true });
//         if (!service) {
//             return res.status(404).json({ message: 'Service not found' });
//         }
//         res.json({ message: 'Service updated successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.deleteService = async (req, res) => {
//     try {
//         const service = await Service.findByIdAndRemove(req.params.id);
//         if (!service) {
//             return res.status(404).json({ message: 'Service not found' });
//         }
//         res.json({ message: 'Service deleted successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.getProjects = async (req, res) => {
//     try {
//         const projects = await Project.find();
//         res.json(projects);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.addProject = async (req, res) => {
//     try {
//         const { name, description, images, client } = req.body;
//         const project = new Project({ name, description, images, client });
//         await project.save();
//         res.json({ message: 'Project added successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.updateProject = async (req, res) => {
//     try {
//         const { name, description, images, client } = req.body;
//         const project = await Project.findByIdAndUpdate(req.params.id, { name, description, images, client }, { new: true });
//         if (!project) {
//             return res.status(404).json({ message: 'Project not found' });
//         }
//         res.json({ message: 'Project updated successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.deleteProject = async (req, res) => {
//     try {
//         const project = await Project.findByIdAndRemove(req.params.id);
//         if (!project) {
//             return res.status(404).json({ message: 'Project not found' });
//         }
//         res.json({ message: 'Project deleted successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.getClients = async (req, res) => {
//     try {
//         const clients = await Client.find();
//         res.json(clients);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.addClient = async (req, res) => {
//     try {
//         const { name, description, images } = req.body;
//         const client = new Client({ name, description, images });
//         await client.save();
//         res.json({ message: 'Client added successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.updateClient = async (req, res) => {
//     try {
//         const { name, description, images } = req.body;
//         const client = await Client.findByIdAndUpdate(req.params.id, { name, description, images }, { new: true });
//         if (!client) {
//             return res.status(404).json({ message: 'Client not found' });
//         }
//         res.json({ message: 'Client updated successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.deleteClient = async (req, res) => {
//     try {
//         const client = await Client.findByIdAndRemove(req.params.id);
//         if (!client) {
//             return res.status(404).json({ message: 'Client not found' });
//         }
//         res.json({ message: 'Client deleted successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.updateContact = async (req, res) => {
//     try {
//         const { email, phone, address, map } = req.body;
//         const contact = await Contact.findOneAndUpdate({}, { email, phone, address, map }, { new: true, upsert: true });
//         if (!contact) {
//             return res.status(404).json({ message: 'Contact not found' });
//         }
//         res.json({ message: 'Contact updated successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.getStatistics = async (req, res) => {
//     try {
//         const servicesCount = await Service.countDocuments();
//         const projectsCount = await Project.countDocuments();
//         const clientsCount = await Client.countDocuments();
//         res.json({ servicesCount, projectsCount, clientsCount });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.updatePassword = async (req, res) => {
//     try {
//         const { currentPassword, newPassword } = req.body;
//         const admin = await Admin.findById(req.admin.id);
//         const isMatch = await bcrypt.compare(currentPassword, admin.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }
//         const salt = await bcrypt.genSalt(10);
//         admin.password = await bcrypt.hash(newPassword, salt);
//         await admin.save();
//         res.json({ message: 'Password updated successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// exports.deleteAccount = async (req, res) => {
//     try {
//         const admin = await Admin.findByIdAndRemove(req.admin.id);
//         if (!admin) {
//             return res.status(404).json({ message: 'Admin not found' });
//         }
//         res.json({ message: 'Admin deleted successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };
const asyncHandler = require('express-async-handler');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const createAdmin = asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (admin) {
        res.status(400).send({ message: 'Admin already exists' });
      }
  
      const newAdmin = new Admin({ email, password });
      await newAdmin.save();
  
      res.json({
        _id: newAdmin.id,
        email: newAdmin.email,
        token: await generateToken(newAdmin._id),
      });
    } catch (err) {
      res.status(500).send({ message: 'Server error' });
    }
  });
  
  

  const loginAdmin = asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (!admin) {
        res.status(400).send({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, admin.password);
      if (isMatch) {
        const token = await generateToken(admin._id);
        res.cookie('token', token, { httpOnly: true });
        res.json({
          _id: admin.id,
          email: admin.email,
          token,
        });
      } else {
        res.status(400).send({ message: 'Invalid credentials' });
      }
    } catch (err) {
      res.status(500).send({ message: 'Server error' });
    }
  });
  

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'Admin data display' });
});

const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '9d',
  });
};

module.exports = { loginAdmin, getMe,createAdmin };
