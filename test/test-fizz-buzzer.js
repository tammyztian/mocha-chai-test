'use strict';
const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
  it('should return the proper return fizz/buzz/ number value of a number', function () {
    const normalCases = [
      {num: 30, expected: 'fizz-buzz'},
      {num: 25, expected: 'buzz'},
      {num: 9, expected: 'fizz'},
      {num: 7, expected: 7},
    ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should cause an error if the input is not a number', function() {
    const edgeCases = [
      {num: 'a'},
      {num: undefined},
      {num: false},
    ];

    edgeCases.forEach(function(input){
      expect(function () {
        fizzBuzzer(input.num);
      }).to.throw(Error);
    });
  });

});
