const servicesModel = require('../models/services');
const Services = {}
Services.Create= async (req, res, next) => {
  const {name,price,des} = req.body;
  try {
    const service = servicesModel.create({
        name,
        price,
        des
    });
    res.json(service);
  } catch (error) {
    next(error);
  };
};
module.exports = Services;