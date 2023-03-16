const roomModel = require("../models/roomModel");
const Joi = require("joi");
const validateSchema = require("./schemaValidation");
exports.check = async (req, res) => {
  res.send("ok");
};
exports.creatUser = async (req, res) => {
  try {
    let { error } = validateSchema.creatUser.body.validate(req.body);
    let roommates = ["harsha", "subbamma", "kiran", "sathya", "ganesh"];
    let person = roommates.find(
      a => a == req.body.firstName.toLocaleLowerCase()
    );
    if (error == undefined && person != undefined) {
      let body = {
        firstName: req.body.firstName.toLocaleLowerCase(),
        lastName: req.body.lastName,
        amount: req.body.amount,
      };
      let data = await roomModel.create(body);
      res.send({
        status: 200,
        message: "sucess",
        data: body,
      });
    } else {
      res.send({
        status: 400,
        message: error,
      });
    }
  } catch (error) {
    res.send({
      message: "error",
    });
    console.log(error);
    throw error;
  }
};
exports.calculate = async (req, res) => {
  try {
    let { error } = validateSchema.calculateAmount.query.validate(req.query);
    if (error == undefined) {
      let data = await roomModel.find({ firstName: req.query.firstName });
      let amount = data.map(a => a.amount).reduce((a, b) => a + b);
      res.send({
        message: "sucess",
        data: {
          name: req.query.firstName,
          total: amount,
        },
      });
    } else if (req.query.total == "total") {
      let data = await roomModel.find({});
      let amount = data.map(a => a.amount).reduce((a, b) => a + b);
      res.send({
        message: "sucess",
        total: amount,
      });
    } else {
      res.send({
        message: "pass valid query",
      });
    }
  } catch (error) {
    res.send({
      message: "error",
    });
    console.log(error);
    throw error;
  }
};
