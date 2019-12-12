class Line {

  constructor(point1, point2){
    this.start = {
      x: point1[0],
      y: point1[1]
    }
    this.end = {
      x: point2[0],
      y: point2[1]
    }
  }

  toString() {
    const startingPoint = `starting point => x:${this.start.x}, y:${this.start.y}`;
    const endingPoint = `ending point => x:${this.end.x}, y:${this.end.y}`;
    const stringFormat = startingPoint + "\n" + endingPoint;
    return stringFormat;
  }

  isEqualTo(otherLine) {
    const startX = (this.start.x == otherLine.start.x);
    const startY = (this.start.y == otherLine.start.y);
    const endX = (this.end.x == otherLine.end.x);
    const endY = (this.end.y == otherLine.end.y);

    const startCheck = startX && startY;
    const endCheck = endX && endY;
    const lineCheck = startCheck && endCheck;
    const typeCHeck = otherLine instanceof Line;
    return lineCheck && typeCHeck;
  }
}

module.exports = { Line };
