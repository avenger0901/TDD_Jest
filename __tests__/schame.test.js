const Schema = require('../lib/schame.js');

describe('schema', ()=> {
  it('Test that validate method returns the object with all fields cast', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String,
        required: true
      }
      
    });

    const dog = {
      name:'jojo',
      age: 5,
      weight: '20 lbs'
    };

    expect(schema.validate(dog)).toEqual({
      name:'jojo',
      age: 5,
      weight: '20 lbs'
    });
  });




});