const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  if (!validator.isLength(data.password, { min: 6, max: 45 })) {
    errors.name = "Name must be between 6 and 45 characters";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
