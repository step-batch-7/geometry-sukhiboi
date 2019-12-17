const Line = require("./line");
const Point = require("./point");

const getDimensions = function(vertexA, vertexC) {
  const length = Math.abs(vertexC.x - vertexA.x);
  const breadth = Math.abs(vertexA.y - vertexC.y);
  return { length, breadth };
};

const getOtherVertices = function(vertexA, vertexC) {
  const vertexB = new Point(vertexC.x, vertexA.y);
  const vertexD = new Point(vertexA.x, vertexC.y);
  return { vertexB, vertexD };
};

const isCoordinateInRange = function(coordinate1, coordinate2, coordinate3) {
  return (
    (coordinate3 >= coordinate2 && coordinate3 <= coordinate1) ||
    (coordinate3 <= coordinate2 && coordinate3 >= coordinate1)
  );
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
    return length * breadth;
  }

  get perimeter() {
    const { length, breadth } = getDimensions(this.vertexA, this.vertexC);
    return 2 * (length + breadth);
  }

  isEqualTo(other) {
    if (this === other) return true;
    if (!(other instanceof Rectangle)) return false;
    const thisDiagonal = new Line(this.vertexA, this.vertexC);
    const otherDiagonal = new Line(other.vertexA, other.vertexC);
    return thisDiagonal.isEqualTo(otherDiagonal);
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const { vertexB, vertexD } = getOtherVertices(this.vertexA, this.vertexC);
    const AB = new Line(this.vertexA, vertexB);
    const BC = new Line(vertexB, this.vertexC);
    const CD = new Line(this.vertexC, vertexD);
    const DA = new Line(vertexD, this.vertexA);
    return (
      AB.hasPoint(point) ||
      BC.hasPoint(point) ||
      CD.hasPoint(point) ||
      DA.hasPoint(point)
    );
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    return (
      isCoordinateInRange(this.vertexA.x, this.vertexC.x, point.x) &&
      isCoordinateInRange(this.vertexA.y, this.vertexC.y, point.y)
    );
  }
}

module.exports = Rectangle;
