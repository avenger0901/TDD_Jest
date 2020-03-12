const { getCaster } = require('./types.js');
module.exports = class Validator {
  constructor(field, configuration){
    this.field = field;
    this.configuration = configuration;
  }
  validate(obj){
    if(this.configuration.required && !(this.field in obj)){
      throw new Error(`Missing required field >>${this.field}<<`);
    }
    if(!this.configuration.require && ! (this.field in obj)){
      return null;
    }
    const caster = getCaster(this.configuration.type);
    return caster(obj[this.field]);
    
  }
};


// nameValidator.validate(dog); // returns 'spot'
// ageValidator.validate(dog); // returns 5
// colorValidator.validate(dog); // throws error
