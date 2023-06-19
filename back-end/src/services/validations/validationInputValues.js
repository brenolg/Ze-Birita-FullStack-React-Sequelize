const { 
  newUserSchema,
  newLoginSchema,
  newProductSchema,
  newSaleSchema,
  newUpdateUserSchema, 
} = require('./schemas');

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

const validateNewProduct = (product) => {
  const { error } = newProductSchema.validate(product);
  if (!error) {
    return { type: null, message: null, 
  }; 
}

  return { type: 'INVALID_VALUES', message: error.message };
};

const validateNewSale = (sale) => {
  const { error } = newSaleSchema.validate(sale);
  if (!error) {
    return { type: null, message: null, 
  }; 
}

  return { type: 'INVALID_VALUES', message: error.message };
};

const validateUpdateUser = (sale) => {
  const { error } = newUpdateUserSchema.validate(sale);
  if (!error) {
    return { type: null, message: null, 
  }; 
}

  return { type: 'INVALID_VALUES', message: error.message };
};

module.exports = {
  validateNewUser,
  validateLogin,
  validateNewProduct,
  validateNewSale,
  validateUpdateUser,
};
