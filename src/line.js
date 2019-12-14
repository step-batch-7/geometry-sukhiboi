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
    return `[Line ${startingPoint} to ${endingPoint}]`;
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
    const slopeOfThisLine = this.slope;
    const slopeOfOtherLine = otherLine.slope;
    const areLinesParallel = slopeOfThisLine == slopeOfOtherLine;
    const yInterceptOfThisLine = this.end.y - slopeOfThisLine * this.end.x;
    const yInterceptOfOtherLine =
      otherLine.end.y - slopeOfOtherLine * otherLine.end.x;
    if (yInterceptOfThisLine == yInterceptOfOtherLine) return false;
    return areLinesParallel;
  }

  get slope() {
    const diffOfXCoordinates = this.end.x - this.start.x;
    const diffOfYCoordinates = this.end.y - this.start.y;
    const slope = diffOfYCoordinates / diffOfXCoordinates;
    if (slope === Infinity) return undefined;
    return slope;
  }

  findX(yCoordinate) {
    const slope = this.slope;
    const xCoordinate = ((yCoordinate - this.start.y) / slope) + this.start.x;
    return xCoordinate;
  }

  findY(xCoordinate) {
    const slope = this.slope;
    const yCoordinate = ((xCoordinate - this.start.x) / slope) + this.start.y;
    return yCoordinate;
  }
}

module.exports = { Line };
