const isNumber = val => typeof val === 'number';
const isString = str => typeof str === 'string';
const isBoolean = boolean => typeof boolean === 'boolean';
const isArray = arr => Array.isArray(arr) === true;
const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
const isFunction = func => typeof func === 'function';



const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};
const castToString = str => {
  if(isString(str)) return str;
  // const string = String(str);

  if(isNumber(str)) return str.toString();
  if(isBoolean(str)) return str.toString();

  if(!isString(str)) throw new CastError(String, str);
  
};
const castToBoolean = value => {
 
  if(isBoolean(value)) return value;

  if(!isBoolean(value)) throw new CastError(Boolean, value);
  
};







class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  String: castToString
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  CastError,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean
};
