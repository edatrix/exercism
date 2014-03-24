var isLeapYear = function(year) {
  year %100 == 0 && year %4 == 0 || year %400 == 0
};

var isAnyOldYear = function(year) {
  year.isOdd
}

var isTurnOfTwentiethCentury = function(year) {

}

var isTurnOfTwentyFirstCentury = function(year) {

}
  
module.exports = isLeapYear;
