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
    return `Line (${this.start.x}, ${this.start.y}) (${this.end.x}, ${this.end.y})`;
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
