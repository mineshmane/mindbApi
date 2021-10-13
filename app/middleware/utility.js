const multer = require('multer'),
 
 {upload}  = require('./multerservice')





module.exports={
    storeImg: (req, res, next) => {
        console.log(" req in store img");
        var singleUpload = upload.single('file');
    
        singleUpload(req, res, (err, data) => {
            if (err) {
                console.error("error occur in uploadImg utility callback", err.message)
                return res.status(400).json({ message: err.message, statuscode: 400 })
            }
    
            if ([undefined, "", null].includes(req.file)) {
                return next();
            }
            req.file = req.file.filename
            next();
        })
    }
}