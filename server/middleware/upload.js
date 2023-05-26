const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: (req, file, cb ) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req,file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;