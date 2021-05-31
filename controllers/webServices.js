const web = require('../models/webServices');
const WebServices = {}

WebServices.All = async (req,res) => {
  const find = await web.find({});
  res.render('webPackages',{find});
};

WebServices.Create= async (req, res, next) => {
  const {name,price,des} = req.body;
  try {
    const service = await web.create({
        name,
        price,
        des
    });
    res.redirect('/admin/package');
  } catch (error) {
    next(error);
  };
};
WebServices.Delete= async (req, res, next) => {
  const id = req.params.id;
  try {
  const deleteditem = await web.findByIdAndDelete({_id:id});
  res.redirect('/admin/package')  
  } catch (error) {
    next(error);
  };
};
module.exports = WebServices;