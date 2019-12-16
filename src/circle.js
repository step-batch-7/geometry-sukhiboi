class Circle {
  constructor(centre, radius) {
    this.centre = {
      x: centre.x,
      y: centre.y
    };
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

    const isXcoordinateOfCentreEqual = this.centre.x == otherCircle.centre.x;
    const isYcoordinateOfCentreEqual = this.centre.y == otherCircle.centre.y;
    const isCentreEqual = isXcoordinateOfCentreEqual && isYcoordinateOfCentreEqual;
    const isRadiusEqual = this.radius == otherCircle.radius;
    const areCirclesEqual = isCentreEqual && isRadiusEqual;
    
    return areCirclesEqual;
  }
}

module.exports = Circle;
