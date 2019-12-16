const Point = require("./point");

class Circle {
  constructor(centre, radius) {
    this.centre = new Point(centre.x, centre.y);
    this.radius = radius;
  }

  toString() {
    const centre = `@(${this.centre.x},${this.centre.y})`;
    const radius = `radius ${this.radius}`;
    return `[Circle ${centre} ${radius}]`;
  }

  isEqualTo(otherCircle) {
    if (this === otherCircle) return true;
    if (!(otherCircle instanceof Circle)) return false;

    const areCentresEqual = this.centre.isEqualTo(otherCircle.centre);
    const areRadiiEqual = this.radius == otherCircle.radius;

    return areCentresEqual && areRadiiEqual;
  }

  get area(){
    const pi = Math.PI;
    const radiusSquare = Math.pow(this.radius, 2);
    const area = pi * radiusSquare;
    return area;
  }
}

module.exports = Circle;
