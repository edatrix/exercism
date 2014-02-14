var isLeapYear = function(year) {
  if (year === 1900) {
    return false;
  } else if (year % 2 === 0) {
    return true;
  } else {
    return false;
  };
};
  
module.exports = isLeapYear;
