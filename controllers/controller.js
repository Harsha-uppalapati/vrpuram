const vrpuraModel = require("../models/vrpuraModel");
const Joi = require("joi");
const validateSchema = require("./schemaValidation");
exports.check = async (req, res) => {
  res.send("ok");
};
exports.creatUser = async (req, res) => {
  try {
    let { error } = await validateSchema.creatUser.body.validate(req.body);
    if (error == undefined) {
      let body = req.body;
      let finduser = {
        firstName: { $regex: req.body.firstName, $options: "i" },
        lastName: { $regex: req.body.lastName, $options: "i" },
      };
      let find = await vrpuraModel.find(finduser);
      if (find.length == 0) {
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
    } else {
      res.send({
        status: 400,
        message: error.message,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
