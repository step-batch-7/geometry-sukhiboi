const arePointsEqual = function(point1, point2) {
  const areXcoordinatesEqual = point1.x === point2.x;
  const areYcoordinatesEqual = point1.y === point2.y;
  return areXcoordinatesEqual && areYcoordinatesEqual;
};

class Line {
  constructor(start, end) {
    this.start = {
      x: start.x,
      y: start.y
    };
    this.end = {
      x: end.x,
      y: end.y
    };
  }

  toString() {
    const startingPoint = `(${this.start.x}, ${this.start.y})`;
    const endingPoint = `(${this.end.x}, ${this.end.y})`;
    return `Line ${startingPoint} ${endingPoint}`;
  }

  isEqualTo(otherLine) {
    if (this === otherLine) return true;
    if (!(otherLine instanceof Line)) return false;

    const areStartingPointsEqual = arePointsEqual(this.start, otherLine.start);
    const areEndingPointsEqual = arePointsEqual(this.end, otherLine.end);
    const areLinesEqual = areStartingPointsEqual && areEndingPointsEqual;
    return areLinesEqual;
  }
}

module.exports = { Line };
