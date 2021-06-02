const hosting = require('../models/hostingServices');
const HostingServices = {}

HostingServices.All = async (req,res,next) => {
  try {
    const find = await hosting.find({})
    res.render('hostingPackages',{find});

  } catch (error) {
    res.render('error')
  }
};

HostingServices.Create= async (req, res, next) => {
  const {name,price,des} = req.body;
  try {
    const service = await hosting.create({
        name,
        price,
        des
    });
    res.redirect('/admin/package');
  } catch (error) {
    next(error);
  };
};
HostingServices.Delete= async (req, res, next) => {
  const id = req.params.id;
  try {
  const deleteditem = await hosting.findByIdAndDelete({_id:id});
  res.redirect('/admin/package')  
  } catch (error) {
    next(error);
  };
};
module.exports = HostingServices;