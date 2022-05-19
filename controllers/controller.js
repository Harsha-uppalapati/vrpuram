const vrpuraModel = require("../models/vrpuraModel");

exports.check = async (req, res) => {
  res.send("ok");
};
exports.creatUser = async (req, res) => {
  try {
    let body = req.body;

    let find = await vrpuraModel.find({
      firstName: req.firstName,
      lastName: req.lastName,
    });
    if (!find) {
      let data = await vrpuraModel.create(body);
      res.send({
        status: 200,
        message: "sucess",
        data: data,
      });
    } else {
      res.send({
        status: 409,
        message: "useralready exists",
        data: find,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
