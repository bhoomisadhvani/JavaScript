

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

let availableFood = ["Pizza", "burger", "Pasta", "Sandwich"];

function PrepareFood(food) {
  return new Promise((resolve, reject) => {
    if (!availableFood.includes(food)) {
      reject("Food cannot be prepared");
    } else {
      setTimeout(() => {
        console.log("Stage2  promise.js:45 - async_await.js:27", `${food} is being prepared...`);
        resolve(food);
      }, 3000);
    }
  });
}

function DeliveryStatus(food) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Stage3  promise.js:55 - async_await.js:37", `${food} has been delivered successfully`);

      resolve(food);
    }, 3000);
  });
}

async function checkfood(food){
    let order = await OrderFood(food)
    let prepare = await PrepareFood(food)
    let status = await DeliveryStatus(food)
    console.log("order successful - async_await.js:48")
}

checkfood("burger")

