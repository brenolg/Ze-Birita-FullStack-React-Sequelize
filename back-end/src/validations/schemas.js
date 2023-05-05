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
});

module.exports = { newUserSchema, newLoginSchema };
