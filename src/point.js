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
    const newPoint = new Point(this.x, this.y);
    return newPoint;
  }
}

module.exports = { Point };
