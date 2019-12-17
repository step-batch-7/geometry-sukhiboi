const Line = require("./line");
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

  get perimeter() {
    const { length, breadth } = getDimensions(this.vertexA, this.vertexC);
    return Math.abs(2 * (length + breadth));
  }

  isEqualTo(other) {
    if(this === other) return true;
    if(!(other instanceof Rectangle)) return false;
    const thisDiagonal = new Line(this.vertexA, this.vertexC);
    const otherDiagonal = new Line(other.vertexA, other.vertexC);
    return thisDiagonal.isEqualTo(otherDiagonal);
  }
}

module.exports = Rectangle;
