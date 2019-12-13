const arePointsEqual = function(point1, point2) {
  const areXcoordinatesEqual = point1.x === point2.x;
  const areYcoordinatesEqual = point1.y === point2.y;
  return areXcoordinatesEqual && areYcoordinatesEqual;
};

const calculateSlope = function(line) {
  const diffOfXCoordinates = line.end.x - line.start.x;
  const diffOfYCoordinates = line.end.y - line.start.y;
  const slope = diffOfYCoordinates / diffOfXCoordinates;
  return slope;
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

  get length() {
    const diffOfXCoordinates = this.end.x - this.start.x;
    const diffOfYCoordinates = this.end.y - this.start.y;
    const horizontalDistance = Math.pow(diffOfXCoordinates, 2);
    const verticalDistance = Math.pow(diffOfYCoordinates, 2);
    const distance = Math.sqrt(horizontalDistance + verticalDistance);
    const length = Number.parseFloat(distance);
    return length;
  }

  isParallelTo(otherLine) {
    const slopeOfThisLine = calculateSlope(this);
    const slopeOfOtherLine = calculateSlope(otherLine);
    const areLinesParallel = slopeOfThisLine == slopeOfOtherLine;
    return areLinesParallel;
  }

  get slope() {
    return calculateSlope(this);
  }
}

module.exports = { Line };
