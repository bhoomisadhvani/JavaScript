const placeOrder = (food, cb) => {
  try {
    if (food === "") {
      throw new Error("Food name is required");
    }

    setTimeout(() => {
      console.log("stage1 - callback_hell.js:8", `${food} order placed...`);
      cb(null, food);
    }, 2000);
  } catch (error) {
    console.log(error.message);
  }
};

let stock = 5;

const checkStock = (food, cb) => {
  try {
    if (stock <= 0) {
      setTimeout(() => {
        throw new Error("Food is out of stock");
      }, 2000);
    } else {
      setTimeout(() => {
        console.log("stage2 - callback_hell.js:26", `${food} is available`);
        cb(null, food);
      }, 2000);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const prepareFood = (food, cb) => {
  try {
    setTimeout(() => {
      console.log("stage3 - callback_hell.js:38", `${food} is being prepared...`);

      stock--;

      cb(null, food);
    }, 3000);
  } catch (error) {
    console.log(error.message);
  }
};

const deliverFood = (food, cb) => {
  try {
    setTimeout(() => {
      console.log("stage4 - callback_hell.js:52", `${food} is out for delivery...`);

      cb(null, food);
    }, 3000);
  } catch (error) {
    console.log(error.message);
  }
};


placeOrder("Pizza", (err, food) => {
  if (err) {
    return console.log(err.message);
  } else {
    checkStock(food, (err, food) => {
      if (err) {
        return console.log(err.message);
      } else {
        prepareFood(food, (err, food) => {
          if (err) {
            return console.log(err.message);
          } else {
            deliverFood(food, (err, food) => {
              if (err) {
                return console.log(err.message);
              } else {
                console.log(`${food} delivered successfully - callback_hell.js:78`);
              }
            });
          }
        });
      }
    });
  }
});