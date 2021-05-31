const multer = require('multer');
var rawname = "img" + '-'+ Date.now() + '.jpg'
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null,'./public/image')
  },
  filename: function (req, file, cb) {
  cb(null, rawname);
    }
  });
const upload = multer({storage:imageStorage});

module.exports = {upload,rawname};
