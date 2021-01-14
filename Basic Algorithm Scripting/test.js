function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
House.prototype.roof = 2;
House.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  }
};
// Only change code below this line
let myHouse = new House(1000);
let yourHouse = new House(1000);

// console.log(myHouse instanceof House);
// console.log(myHouse.roof);
myHouse.eat();
