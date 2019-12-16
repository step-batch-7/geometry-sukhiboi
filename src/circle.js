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
}

module.exports = Circle;