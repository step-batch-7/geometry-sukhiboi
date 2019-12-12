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
}

module.exports = { Line };
