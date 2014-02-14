var Robot = function() {

  var validDirections = [ 'north', 'east', 'south', 'west' ]

  this.orient = function(direction) {
    if (validDirections.contains(direction)) {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  };

  this.turnRight = function() {
    var index = validDirections.indexOf(this.bearing);
    var newIndex = index - 3;
    this.bearing = newIndex
    // this.orient(validDirections[newIndex]);
  };
};

Array.prototype.contains = function (needle) {
  for (var i in this) {
    if (this[i] === needle) return true;
  }
  return false;
}

module.exports = Robot;
