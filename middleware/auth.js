const jwt = require("jsonwebtoken");

function CheckLogin (req, res,next) {
    const token = req.headers.cookie;
    if (!token || token === undefined) {
      return res.redirect('/admin/login')
    };
  
    try {
      const decoded = jwt.verify(token.slice(6),'randomString');
      req.user = decoded.user;
      next()
    } catch (e) {
      res.status(200).send("Yanlış Token! Zəhmət Olmasa Yenidən giriş edin");
    }
   };
module.exports=CheckLogin;
    