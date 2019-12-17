const Point = require("./point");

class Rectangle {
  constructor(vertexA, vertexC) {
    this.vertexA = new Point(vertexA.x, vertexA.y);
    this.vertexC = new Point(vertexC.x, vertexC.y);
  }

  toString() {
    const pointA = `(${this.vertexA.x},${this.vertexA.y})`;
    const pointC = `(${this.vertexC.x},${this.vertexC.y})`;
    return `[Rectangle ${pointA} to ${pointC}]`;
  }

  get area() {
    const length = this.vertexC.x - this.vertexA.x;
    const breadth = this.vertexA.y - this.vertexC.y;
    return Math.abs(length * breadth);
  }
}

module.exports = Rectangle;
