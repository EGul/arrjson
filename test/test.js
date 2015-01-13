
var assert = require('assert');
var arrjson = require('../index.js');

var temp = {

  one: 'first',
  two: { one: 'second first' },
  three: [
    { one: 'third first' },
    { one: 'fourth first' },
    { two: 'second' },
    [ { one: 'fifth first' }, { two: 'second second' } ],
    [ { one: 'sixth first' }, { two: 'third second' } ]
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

    it ('should return [third first, fourthfirst]', function () {

      var should = ['third first', 'fourth first'];

      assert.deepEqual(should, arrjson.get(temp, 'three.one'));

    });

  });

});
