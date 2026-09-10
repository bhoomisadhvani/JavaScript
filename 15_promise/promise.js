// to overcome callback hell,we use promise,promise is handle asynchronous operations by chaining.

// promise is an obejct that links producing and consuming code.

// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// a promise have three states

// pending
// fulfilled
// rejected

// create a promise Object.we use the promise() constructor.

// let promise =  new promise(function(resolve,reject){
//     do something
//  })

// the function has two functions resolve and reject

function OrderFood(food) {
  return new Promise((resolve, reject) => {
    if (food === "") {
      reject("Food name should not be empty");
    } else {
      setTimeout(() => {
        console.log(
          "Stage1",
          `${food} order has been placed....`,
        );
        resolve(food);
      }, 3000);
    }
  });
}

let availableFood = ["Pizza", "Burger", "Pasta", "Sandwich"];

function PrepareFood(food) {
  return new Promise((resolve, reject) => {
    if (!availableFood.includes(food)) {
      reject("Food cannot be prepared");
    } else {
      setTimeout(() => {
        console.log("Stage2 - promise.js:45", `${food} is being prepared...`);
        resolve(food);
      }, 3000);
    }
  });
}

function DeliveryStatus(food) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Stage3 - promise.js:55", `${food} has been delivered successfully`);

      resolve(food);
    }, 3000);
  });
}

OrderFood("Pizza")
    .then((food) => {
    return PrepareFood(food);
  })
  .then((food) => {
    return DeliveryStatus(food);
  })
  .then((food) => {
    console.log("Order Successful: - promise.js:70", food);
  })
  .catch((error) => {
    console.log("Error: - promise.js:73", error);
  })
  .finally(() => {
    console.log("Thank you for ordering! - promise.js:76");
  });
