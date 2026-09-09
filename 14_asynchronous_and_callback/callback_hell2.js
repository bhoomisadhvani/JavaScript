function selectFood(cb) {
  setTimeout(() => {
    console.log("Step1: Food selected... - callback_hell2.js:3");
    cb();
  }, 2000);
}

function confirmOrder(cb) {
  setTimeout(() => {
    console.log("Step2: Order confirmed... - callback_hell2.js:10");
    cb();
  }, 2000);
}

function prepareFood(cb) {
  setTimeout(() => {
    console.log("Step3: Food is being prepared... - callback_hell2.js:17");
    cb();
  }, 2000);
}

function deliverFood(cb) {
  setTimeout(() => {
    console.log("Step4: Food delivered... - callback_hell2.js:24");
    cb();
  }, 2000);
}

selectFood(() => {
  confirmOrder(() => {
    prepareFood(() => {
      deliverFood(() => {
        console.log("Food order completed successfully! - callback_hell2.js:33");
      });
    });
  });
});