const multer  = require('multer')
const fs = require ('fs')

const storage = multer.diskStorage({  
    destination: function (req, file, cb) {
      cb(null, './file')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ "--" + file.originalname)
    }
  })

  module.exports = multer ({
    storage,
    limits:{
        fileSize: 500_000,
        fieldNameSize: 1_000_000
    }
  })