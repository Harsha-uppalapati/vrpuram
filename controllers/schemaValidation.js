const Joi = require("joi");
module.exports = {
  creatUser: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      amount: Joi.number().required(),
      mobileNo: Joi.number().optional(),
    }),
  },
  calculateAmount: {
    query: Joi.object({
      firstName: Joi.string().required(),
    }),
  },
};
