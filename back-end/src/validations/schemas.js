const joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');

const joiPassword = joi.extend(joiPasswordExtendCore);

const newLoginSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joiPassword
  .string()
  .min(6)
  .minOfSpecialCharacters(1)
  .minOfLowercase(1)
  // .minOfUppercase(1)
  .minOfNumeric(1)
  .noWhiteSpaces()
  .onlyLatinCharacters()
  .required(),
});

const newUserSchema = newLoginSchema.keys({
  name: joi.string().min(12).required(),
  role: joi.string().valid('administrator', 'customer', 'seller'),
});

const newProductSchema = joi.object().keys({
  name: joi.string().min(5).required(),
  price: joi.number().min(0.01).positive().required(),
  urlImage: joi.string().uri().required(),
});

module.exports = { newUserSchema, newLoginSchema, newProductSchema };
