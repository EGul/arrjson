
var assert = require('assert');
var arrjson = require('../index.js');

var temp = {

  one: 'first',
  two: { one: 'second first' },
  three: [
    { one: 'third first' },
    { two: 'second' }
  ]

};

describe('arrjson', function () {

  describe('get', function () {

    it('should return [first]', function () {

      var should = ['first'];

      assert.deepEqual(should, arrjson.get(temp, 'one'));

    });

    it('should return [second first]', function () {

      var tempShould = ['second first'];

      assert.deepEqual(tempShould, arrjson.get(temp, 'two.one'));

    });

  });

});
