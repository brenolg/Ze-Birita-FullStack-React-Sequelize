const { newUserSchema } = require('./schemas');

const validateNewUser = (user) => {
  const { error } = newUserSchema.validate(user);
  if (!error) {
    return { type: null, message: null, 
  }; 
}

  return { type: 'INVALID_VALUES', message: error.message };
};

module.exports = {
  validateNewUser,
};
