var isLeapYear = function(year) {

  var isKnownLeapYear = function(year) {
    !isCentury(year) && isVanilla(year) || isExceptionalCentury(year) 
  };

  var isVanilla = function(year) {
    if (year %4 == 0) {
      return true;
    }
  };

  var isCentury = function(year) {
    if (year %100 == 0) {
      return true;
    }
  };

  var isExceptionalCentury = function(year) {
    if (year %400 == 0) {
      return true;
    }
  };
};
  
module.exports = isLeapYear;
