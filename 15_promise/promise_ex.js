let foodItems = ["pizza", "burger", "pasta", "samosa", "biryani"];

function orderFood(food) {

    let orderId = "1234abcd";

    return new Promise((resolve, reject) => {

        if (!foodItems.includes(food)) {

            setTimeout(() => {
                reject(`${food} is not available`);
            }, 2000);

        } else {

            setTimeout(() => {

                console.log("stage1 - promise_ex.js:19", `${food} order has been placed`);

                resolve(food);

            }, 3000);
        }
    });
}


orderFood("pizza")

    .then((food) => {

        return new Promise((resolve, reject) => {

            if (food === "") {

                reject("food order failed");

            } else {

                setTimeout(() => {

                    console.log("stage2 - promise_ex.js:43", `${food} order created`);

                    resolve(food);

                }, 3000);
            }
        });
    })


    .then((food) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                console.log(
                    "stage-3",
                    `${food} is being prepared`
                );

                resolve(food);

            }, 3000);
        });
    })


    .then((food) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                console.log(
                    "stage-4",
                    `${food} has been delivered to customer`
                );

                resolve(food);

            }, 3000);
        });
    })


    .then((food) => {

        console.log("Order Successful: - promise_ex.js:91", food);

    })


    .catch((err) => {

        console.log("Error: - promise_ex.js:98", err);

    })


    .finally(() => {

        setTimeout(() => {

            console.log("Do you want to order more food? - promise_ex.js:107");

        }, 1000);

    });