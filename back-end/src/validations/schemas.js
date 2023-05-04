const joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');

const joiPassword = joi.extend(joiPasswordExtendCore);

const Joi = require('joi');

const newUserSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: joi.string().email().required(),
  password: joiPassword
  .string()
  .minOfSpecialCharacters(1)
  .minOfLowercase(1)
  .minOfUppercase(1)
  .minOfNumeric(1)
  .noWhiteSpaces()
  .onlyLatinCharacters()
  .required()
  .messages({
    'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
    'password.minOfSpecialCharacters':
          '{#label} should contain at least {#min} special character',
    'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
    'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
    'password.noWhiteSpaces': '{#label} should not contain white spaces',
    'password.onlyLatinCharacters': '{#label} should contain only latin characters',
}),
});

// Existe essa verificação de characters Latin

module.exports = { newUserSchema };
