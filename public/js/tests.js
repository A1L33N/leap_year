var leapYear = require('./leap_year.js');
var expect = require('chai').expect;

describe('leapYear', function() {
  it('is false for a near that is not divisible by 4', function() {
    expect(leapYear(1999)).to.eq(false);
  });

  it('is true for most years divisible by 4', function(){
    expect(leapYear(2016)).to.equal(true);
  });

  it('is false for most years divisible by 100', function() {
    expect(leapYear(1900)).to.equal(false);
  });
});
