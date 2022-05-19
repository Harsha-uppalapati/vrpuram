const Joi = require("joi");
module.exports = {
  creatUser: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      amount: Joi.number().optional(),
      mobileNo: Joi.number().optional(),
    }),
  },
};
