const Point = require("./point");

const getDimensions = function(vertexA, vertexC) {
  const length = vertexC.x - vertexA.x;
  const breadth = vertexA.y - vertexC.y;
  return { length, breadth };
};

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
    const { length, breadth } = getDimensions(this.vertexA, this.vertexC);
    return Math.abs(length * breadth);
  }
}

module.exports = Rectangle;
