const other = require('../models/otherServices');
const OtherServices = {}

OtherServices.All = async (req,res,next) => {
  try {
    const find = await other.find();
    res.render('otherPackage',{find});

  } catch (error) {
    res.render('error')
  }
};
OtherServices.Create= async (req, res, next) => {
  const {name,price,des} = req.body;
  try {
    const service = await other.create({
        name,
        price,
        des
    });
    res.json(service);
  } catch (error) {
    next(error);
  };
};
OtherServices.Delete= async (req, res, next) => {
    const id = req.params.id;
    try {
    const deleteditem = await other.findByIdAndDelete({_id:id});
    res.redirect('/admin/package')  
    } catch (error) {
      next(error);
    };
  };

module.exports = OtherServices;