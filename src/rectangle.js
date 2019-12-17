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
}

module.exports = Rectangle;