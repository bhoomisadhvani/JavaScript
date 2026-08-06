//  object accessor set method

const car = {
  brand: "",
  set carBrand(name) {
    this.brand = name;
  },
};

car.carBrand = "Tesla";
console.log("car brand - 06_setter.js:11", car.brand);
