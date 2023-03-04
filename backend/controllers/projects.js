const Project = require('../models/Project');

// Create a new project
exports.create = (req, res, next) => {
    const newProject = new Project(req.body);
    newProject.save()
        .then(project => {
            res.json({ message: 'Project created successfully' });
        })
        .catch(error => {
            next(error);
        });
};

// Get all projects
exports.list = (req, res, next) => {
    Project.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(error => {
            next(error);
        });
};

// Get a single project
exports.get = (req, res, next) => {
    Project.findById(req.params.id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: 'Project not found' });
            } else {
                res.json(project);
            }
        })
        .catch(error => {
            next(error);
        });
};

// Update a project
exports.update = (req, res, next) => {
    Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(project => {
            if (!project) {
                res.status(404).json({ message: 'Project not found' });
            } else {
                res.json({ message: 'Project updated successfully' });
            }
        })
        .catch(error => {
            next(error);
        });
};

// Delete a project
exports.delete = (req, res, next) => {
    Project.findByIdAndRemove(req.params.id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: 'Project not found' });
            } else {
                res.json({ message: 'Project deleted successfully' });
            }
        })
        .catch(error => {
            next(error);
        });
};