function CheckLogin (req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/admin/login')
   };

function CheckLogout (req,res,next) {
        if (req.isAuthenticated()) {
          return res.redirect('/admin')
        }
        next()
      }
module.exports={CheckLogin,CheckLogout};
    