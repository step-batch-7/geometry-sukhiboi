const Point = require("./point");

const arePointsCollinear = function(point1, point2, point3) {
  const areaOfTriangle =
    (point1.x * (point2.y - point3.y) +
      point2.x * (point3.y - point1.y) +
      point3.x * (point1.y - point2.y)) /
    2;
  return areaOfTriangle == 0;
};

const isCoordinateInRange = function(coordinate1, coordinate2, coordinate3) {
  return (
    (coordinate3 >= coordinate2 && coordinate3 <= coordinate1) ||
    (coordinate3 <= coordinate2 && coordinate3 >= coordinate1)
  );
};

class Line {
  constructor(start, end) {
    this.start = new Point(start.x, start.y);
    this.end = new Point(end.x, end.y);
    Object.freeze(this)
  }

  toString() {
    const startingPoint = `(${this.start.x},${this.start.y})`;
    const endingPoint = `(${this.end.x},${this.end.y})`;
    return `[Line ${startingPoint} to ${endingPoint}]`;
  }

  isEqualTo(otherLine) {
    if (this === otherLine) return true;
    if (!(otherLine instanceof Line)) return false;
    const areStartingPointsEqual =
      this.start.isEqualTo(otherLine.start) ||
      this.start.isEqualTo(otherLine.end);
    const areEndingPointsEqual =
      this.end.isEqualTo(otherLine.end) || this.end.isEqualTo(otherLine.start);
    const areLinesEqual = areStartingPointsEqual && areEndingPointsEqual;
    return areLinesEqual;
  }

  get length() {
    const length = this.start.findDistanceTo(this.end);
    return length;
  }

  isParallelTo(otherLine) {
    if (!(otherLine instanceof Line)) return false;
    if (arePointsCollinear(this.start, this.end, otherLine.start)) return false;
    return this.slope == otherLine.slope;
  }

  get slope() {
    const diffOfXCoordinates = this.end.x - this.start.x;
    const diffOfYCoordinates = this.end.y - this.start.y;
    const slope = diffOfYCoordinates / diffOfXCoordinates;
    return slope;
  }

  findX(y) {
    if (!isCoordinateInRange(this.start.y, this.end.y, y)) return NaN;
    if ([Infinity, -Infinity, 0].includes(this.slope)) return this.start.x;
    return (y - this.start.y) / this.slope + this.start.x;
  }

  findY(x) {
    if (!isCoordinateInRange(this.start.x, this.end.x, x)) return NaN;
    if ([Infinity, -Infinity, 0].includes(this.slope)) return this.start.y;
    return this.slope * (x - this.start.x) + this.start.y;
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
    if (!Number.isFinite(distance)) return null;
    if (distance > this.length || distance < 0) return null;
    const distanceRatio = distance / this.length;
    const x = (1 - distanceRatio) * this.start.x + distanceRatio * this.end.x;
    const y = (1 - distanceRatio) * this.start.y + distanceRatio * this.end.y;
    return new Point(x, y);
  }

  findPointFromEnd(distance) {
    const line = new Line(this.end, this.start);
    return line.findPointFromStart(distance);
  }
}

module.exports = Line;
