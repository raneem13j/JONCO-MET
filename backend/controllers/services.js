const Service = require('../models/Service');
const multer = require('multer');


const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({
    storage:Storage
  }).single('uploadImage')
  // call it with the same name in the postman
  
  
   exports.create = async (req, res) => {
    upload(req, res, (err) => {
      if(err){
       console.log('cannot upload an image')
      }
      else{
        const newImage = new Service({
          title: req.body.title,
          description:req.body.description,
          // image:{
          //   data:req.file.filename,
          //   contentType:'image/png/jpeg/svg'
          // }
        //   image: req.file.fieldname + "/" + req.file.originalname
        image: req.file.originalname,
        })
        newImage.save()
        .then(()=>res.send('successfuly uploaded')).catch(()=>res.send('cannot upload an image'))
      }
    })
  }


// Create a new service
// exports.create = (req, res, next) => {
//     const newService = new Service(req.body);
//     newService.save()
//         .then(service => {
//             res.json({ message: 'Service created successfully' });
//         })
//         .catch(error => {
//             next(error);
//         });
// };

// Get all services
exports.list = (req, res, next) => {
    Service.find()
        .then(services => {
            res.json(services);
        })
        .catch(error => {
            next(error);
        });
};

// Get a single service
exports.get = (req, res, next) => {
    Service.findById(req.params.id)
        .then(service => {
            if (!service) {
                res.status(404).json({ message: 'Service not found' });
            } else {
                res.json(service);
            }
        })
        .catch(error => {
            next(error);
        });
};

// Update a service
exports.update = (req, res, next) => {
    Service.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(service => {
            if (!service) {
                res.status(404).json({ message: 'Service not found' });
            } else {
                res.json({ message: 'Service updated successfully' });
            }
        })
        .catch(error => {
            next(error);
        });
};

// Delete a service
exports.delete = (req, res, next) => {
    Service.findByIdAndRemove(req.params.id)
        .then(service => {
            if (!service) {
                res.status(404).json({ message: 'Service not found' });
            } else {
                res.json({ message: 'Service deleted successfully' });
            }
        })
        .catch(error => {
            next(error);
        });
};