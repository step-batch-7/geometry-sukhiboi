const arePointsEqual = function(point1, point2) {
  const areXcoordinateEqual = point1.x === point2.x;
  const areYcoordinateEqual = point1.y === point2.y;
  return areXcoordinateEqual && areYcoordinateEqual;
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
    return `Line (${this.start.x}, ${this.start.y}) (${this.end.x}, ${this.end.y})`;
  }

  isEqualTo(otherLine) {
    const typeCheck = otherLine instanceof Line;
    const areStartPointEqual = arePointsEqual(this.start, otherLine.start);
    const areEndPointEqual = arePointsEqual(this.end, otherLine.end);
    const areLinesEqual = typeCheck && areStartPointEqual && areEndPointEqual;
    return areLinesEqual;
  }
}

module.exports = { Line };
