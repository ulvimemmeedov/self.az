const jwt = require("jsonwebtoken");

function Log (req, res,next) {
    const token = req.headers.cookie;
    if (!token || token === undefined) {
        next()
    };
  
    try {
      const decoded = jwt.verify(token.slice(6),'randomString');
      req.user = decoded.user;
      res.redirect('/admin')
    } catch (e) {
        console.log(e);
      res.status(200).render('login',{message:'xeta baş verdi'});
    }
   };
module.exports=Log;
    