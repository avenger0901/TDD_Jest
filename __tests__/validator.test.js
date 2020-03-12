const  Validator = require ('../lib/validator.js');

describe('validator', () => {
  let nameValidator;
  beforeEach(() => {
    nameValidator = new Validator('name', {
      type: String,
      required: true
    });
  });
  it('has a field and configuration property', () => {
    expect(nameValidator.field).toEqual('name');
    expect(nameValidator.configuration).toEqual({
      type: String,
      required: true
    });
  }); 
  it('can validate an object with the proper type', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

    expect(nameValidator.validate(dog)).toEqual('spot');
  });

  it('can validate an object with the wrong type but castable', () => {
    const dog = {
      name: 12345,
      age: 5,
      weight: '20 lbs'
    };

    expect(nameValidator.validate(dog)).toEqual('12345');
  });
  it('can validate an object with the right type but castable', () => {
    const ageValidator = new Validator('age', {
      type: Number,
      required: true
    });
    const dog = {
      name: 'hello',
      age: 5,
      weight: '20 lbs'
    };

    expect(ageValidator.validate(dog)).toEqual(5);
  });
  it('throws an error when validating an object with a missing required field', () => {
    const dog = {
      age: 5,
      weight: '20 lbs'
    };

    expect(() => nameValidator.validate(dog)).toThrowError('Missing required field >>name<<');
  });

  it('throws an error when validating an object with a missing required field', () => {
    const nameValidator = new Validator('name', {
      type: String,
      required: false
    });

    const dog = {
      age: 5,
      weight: '20 lbs'
    };

    expect(nameValidator.validate(dog)).toEqual(null);
  });
});
