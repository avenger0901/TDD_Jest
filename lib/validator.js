const { getCaster } = require('./types.js');
module.exports = class Validator {
  constructor(field, configuration){
    this.field = field;
    this.configuration = configuration;
  }
  validate(obj){

    const caster = getCaster(this.configuration.type);
    return caster(obj[this.field]);
    
  }
};


// nameValidator.validate(dog); // returns 'spot'
// ageValidator.validate(dog); // returns 5
// colorValidator.validate(dog); // throws error
