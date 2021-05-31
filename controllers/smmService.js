const smm = require('../models/smmServices');
const SmmServices = {}
SmmServices.All = async (req,res,next) => {
  const find = await smm.find();
  res.render('smmPackage',{find});
};
SmmServices.Create= async (req, res, next) => {
  const {name,price,des} = req.body;
  try {
    const service = await smm.create({
        name,
        price,
        des
    });
    res.json(service);
  } catch (error) {
    next(error);
  };
};
SmmServices.Delete= async (req, res, next) => {
    const id = req.params.id;
    try {
    const deleteditem = await smm.findByIdAndDelete({_id:id});
    res.redirect('/admin/package')  
    } catch (error) {
      next(error);
    };
  };
  // /admin/package
module.exports = SmmServices