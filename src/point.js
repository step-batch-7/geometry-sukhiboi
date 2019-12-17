class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  isEqualTo(otherPoint) {
    if (this === otherPoint) return true;
    if (!(otherPoint instanceof Point)) return false;
    const areXcoordinatesEqual = this.x == otherPoint.x;
    const areYcoordinatesEqual = this.y == otherPoint.y;
    return areXcoordinatesEqual && areYcoordinatesEqual;
  }

  visit(action) {
    return action(this.x, this.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }

  findDistanceTo(point) {
    if (!(point instanceof Point)) return NaN;
    const diffOfXCoordinates = point.x - this.x;
    const diffOfYCoordinates = point.y - this.y;
    const horizontalDistance = Math.pow(diffOfXCoordinates, 2);
    const verticalDistance = Math.pow(diffOfYCoordinates, 2);
    return Math.sqrt(horizontalDistance + verticalDistance);
  }

  isOn(line) {
    return line.hasPoint(this);
  }
}

module.exports = Point;
