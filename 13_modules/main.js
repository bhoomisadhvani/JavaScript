
// module js

import add from "./index.js";

const r1 = add(32, 45);
console.log("r1 - main.js:7", r1);


import {sub,mul,div} from "./index.js"


const r2 = sub(32, 45);
console.log("r2 - main.js:14", r2);


const r3 = mul(32, 45);
console.log("r3 - main.js:18", r3);


const r4 = div(32, 45);
console.log("r4 - main.js:22", r4);

// common js

// const cube=require("./index.js")

// const r5=cube(5)
// console.log("r5 - main.js:29",r5)
