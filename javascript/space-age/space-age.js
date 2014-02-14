function SpaceAge(seconds) {
  'use strict';

  this.seconds = seconds;
  this.earthYears = seconds/31557600;

  this.earthConversion = 1
};

  this.onEarth = function() {
    return this.yearOnPlanet("earth")
  };



module.exports = SpaceAge;
