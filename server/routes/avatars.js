const controller = require('../controllers/avatars');
var express = require('express');
var router = express.Router();
const upload = require ('../middleware/upload');


router.get('/', controller.getAll);  //Gathers all Avatars in the databse 

router.get('/:id', controller.getById); 
router.put('/', upload.single('image'), controller.update); //Updates avatar (Not in use currently, used for future developement) 


module.exports = router;