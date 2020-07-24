// 1. Copy and paste your prototype in here and refactor into class syntax.

class AnotherCuboidMaker{
    constructor(attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const anotherCuboid = new AnotherCuboidMaker ({
    length: 4,
    width: 5,
    height: 5,
});

class CubeMaker extends AnotherCuboidMaker{
    constructor(attr){
    super(attr);
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  cubeVolume(){
    return this.length * this.length * this.length;
  }
  cubeSurfaceArea(){
    return (this.length * this.length) * 6;
  }
}

const cubes = new CubeMaker ({
    length: 5,
    width: 5,
    height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(anotherCuboid.volume()); // 100
console.log(anotherCuboid.surfaceArea()); // 130

console.log(cubes.volume()); // Stretch
console.log(cubes.surfaceArea()); // Stretch

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.