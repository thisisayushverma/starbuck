import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/upload')
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname)
    }
})


export const upload = multer({storage,
    limits:{
    fileSize:1000000
},
fileFilter:(req,file,cb)=>{
    const allowedTypes = ['image/jpeg','image/png','image/gif']
    if(!allowedTypes.includes(file.mimetype)){
        const error = new Error('Invalid file type');
        error.code = 'INVALID_FILE_TYPE';
        return cb(error, false);
    }
    cb(null,true)
}
})