const { newUserSchema, newLoginSchema } = require('./schemas');

const validateNewUser = (user) => {
  const { error } = newUserSchema.validate(user);
  if (!error) {
    return { type: null, message: null, 
  }; 
}

  return { type: 'INVALID_VALUES', message: error.message };
};

const validateLogin = (user) => {
  const { error } = newLoginSchema.validate(user);
  if (!error) {
    return { type: null, message: null, 
  }; 
}

  return { type: 'INVALID_VALUES', message: error.message };
};

module.exports = {
  validateNewUser,
  validateLogin,
};
