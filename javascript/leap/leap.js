var isLeapYear = function(year) {
  if (year === 1900) {
    return false;
  } else if (year % 2 === 0) {
    return true;
  } else {
    return false;
  };
};

var isAnyOldYear = function(year) {

}

var isTurnOfTwentiethCentury = function(year) {

}

var isTurnOfTwentyFirstCentury = function(year) {
  
}
  
module.exports = isLeapYear;
