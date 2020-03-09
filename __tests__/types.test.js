const {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  castToNumber,
  castToString,
  castToBoolean,
  getCaster
} = require('../lib/types.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is a string', () => {
      expect(isString('hi')).toBeTruthy();
      expect(isString(2)).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
      expect(isString(true)).toBeFalsy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is a boolean', () => {
      expect(isBoolean('hi')).toBeFalsy();
      expect(isBoolean(2)).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(() => {})).toBeFalsy();
      expect(isBoolean(true)).toBeTruthy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is a array', () => {
      expect(isArray('hi')).toBeFalsy();
      expect(isArray(2)).toBeFalsy();
      expect(Array.isArray([])).toBeTruthy();
      expect(isArray({})).toBeFalsy();
      expect(isArray(() => {})).toBeFalsy();
      expect(isArray(true)).toBeFalsy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is a object', () => {
      expect(isObject('hi')).toBeFalsy();
      expect(isObject(2)).toBeFalsy();
      expect(isObject([])).toBeFalsy();
      expect(isObject({})).toBeTruthy();
      expect(isObject(() => {})).toBeFalsy();
      // expect(isObject(true)).toBefalsy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is a function', () => {
      expect(isFunction('hi')).toBeFalsy();
      expect(isFunction(2)).toBeFalsy();
      expect(isFunction([])).toBeFalsy();
      expect(isFunction({})).toBeFalsy();
      expect(isFunction(() => {})).toBeTruthy();
      // expect(isObject(true)).toBefalsy();
    });
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });
    it('can cast str to a string', () => {
      expect(castToString(3)).toEqual('3');
      expect(castToString('hello')).toEqual('hello');
      expect(castToString(true)).toEqual('true');
      expect(castToString(false)).toEqual('false');
    });

    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
    it('throws if value is not castable to string', () => {
      expect(() => castToString([])).toThrowErrorMatchingSnapshot();
      expect(() => castToString({})).toThrowErrorMatchingSnapshot();
    });
    it('throws if value is not castable to string', () => {
      expect(() => castToBoolean([])).toThrowErrorMatchingSnapshot();
      expect(() => castToBoolean({})).toThrowErrorMatchingSnapshot();
    });





  });

  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });
});
