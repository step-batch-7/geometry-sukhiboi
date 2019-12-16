const Point = require("./point");

class Line {
  constructor(start, end) {
    this.start = new Point(start.x, start.y);
    this.end = new Point(end.x, end.y);
  }

  toString() {
    const startingPoint = `(${this.start.x},${this.start.y})`;
    const endingPoint = `(${this.end.x},${this.end.y})`;
    return `[Line ${startingPoint} to ${endingPoint}]`;
  }

  isEqualTo(otherLine) {
    if (this === otherLine) return true;
    if (!(otherLine instanceof Line)) return false;

    const areStartingPointsEqual = this.start.isEqualTo(otherLine.start);
    const areEndingPointsEqual = this.end.isEqualTo(otherLine.end);
    const areLinesEqual = areStartingPointsEqual && areEndingPointsEqual;
    return areLinesEqual;
  }

  get length() {
    const diffOfXCoordinates = this.end.x - this.start.x;
    const diffOfYCoordinates = this.end.y - this.start.y;
    const horizontalDistance = Math.pow(diffOfXCoordinates, 2);
    const verticalDistance = Math.pow(diffOfYCoordinates, 2);
    const length = Math.sqrt(horizontalDistance + verticalDistance);
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
    if (yCoordinate > this.end.y || yCoordinate < this.start.y) return NaN;
    if (this.slope == 0) return this.start.x;
    const slope = this.slope;
    const xCoordinate = (yCoordinate - this.start.y) / slope + this.start.x;
    return xCoordinate;
  }

  findY(xCoordinate) {
    if (xCoordinate > this.end.x || xCoordinate < this.start.x) return NaN;
    if (this.slope == undefined) return this.start.y;
    const slope = this.slope;
    const yCoordinate = (xCoordinate - this.start.x) / slope + this.start.y;
    return yCoordinate;
  }

  split() {
    const sumOfXCoordinates = this.start.x + this.end.x;
    const sumOfYCoordinates = this.start.y + this.end.y;
    const midPoint = new Point(sumOfXCoordinates / 2, sumOfYCoordinates / 2);
    const firstHalf = new Line(this.start, midPoint);
    const secondHalf = new Line(midPoint, this.end);
    return [firstHalf, secondHalf];
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const checkWithXcoordinate = this.findX(point.y) == point.x;
    const checkWithYcoordinate = this.findY(point.x) == point.y;
    return checkWithXcoordinate || checkWithYcoordinate;
  }

  findPointFromStart(distance) {
    const typeOfDistance = typeof distance;
    if(!(typeOfDistance == "number")) return null;
    const lengthOfLine = this.length;
    const distanceRatio = distance / lengthOfLine;
    const xCoordinate =
      (1 - distanceRatio) * this.start.x + distanceRatio * this.end.x;
    const yCoordinate =
      (1 - distanceRatio) * this.start.y + distanceRatio * this.end.y;
    return new Point(xCoordinate, yCoordinate);
  }

  findPointFromEnd(distance) {
    const line = new Line(this.end, this.start);
    const point = line.findPointFromStart(distance);
    return point;
  }
}

module.exports = Line;
