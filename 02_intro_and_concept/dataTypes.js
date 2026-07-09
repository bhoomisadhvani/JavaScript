// there are 8 data types in javascript

// 1 string
// 2 Number
// 3 BigInt
// 4 Boolean
// 5 null
// 6 Object
// 7 undefined
// 8 Symbol

// primitive

// string
// Number
// BigInt
// Boolean
// null
// undefined
// Symbol

// Non-primitive

// Object

// ==================== STRING  ====================

let fruit1 = "Mango";
let fruit2 = fruit1;
console.log("before change - dataTypes.js:30", fruit1, fruit2);
fruit2 = "Apple";
console.log("after change - dataTypes.js:32", fruit1, fruit2);

//  Example 2
let city1 = "Mumbai";
let city2 = city1;
console.log("before change - dataTypes.js:37", city1, city2);
city2 = "Delhi";
console.log("after change - dataTypes.js:39", city1, city2);

//  Example 3
let color1 = "Red";
let color2 = color1;
console.log("before change - dataTypes.js:44", color1, color2);
color2 = "Blue";
console.log("after change - dataTypes.js:46", color1, color2);

// ==================== NUMBER  ====================

//  Example 1
let age1 = 25;
let age2 = age1;
console.log("before change - dataTypes.js:53", age1, age2);
age2 = 30;
console.log("after change - dataTypes.js:55", age1, age2);

//  Example 2
let salary1 = 50000;
let salary2 = salary1;
console.log("before change - dataTypes.js:60", salary1, salary2);
salary2 = 70000;
console.log("after change - dataTypes.js:62", salary1, salary2);

//  Example 3
let temperature1 = 36;
let temperature2 = temperature1;
console.log("before change - dataTypes.js:67", temperature1, temperature2);
temperature2 = 40;
console.log("after change - dataTypes.js:69", temperature1, temperature2);

// ==================== BOOLEAN ====================

//  Example 1
let isMarried1 = true;
let isMarried2 = isMarried1;
console.log("before change - dataTypes.js:76", isMarried1, isMarried2);
isMarried2 = false;
console.log("after change - dataTypes.js:78", isMarried1, isMarried2);

//  Example 2
let hasLicense1 = false;
let hasLicense2 = hasLicense1;
console.log("before change - dataTypes.js:83", hasLicense1, hasLicense2);
hasLicense2 = true;
console.log("after change - dataTypes.js:85", hasLicense1, hasLicense2);

//  Example 3
let isAdmin1 = true;
let isAdmin2 = isAdmin1;
console.log("before change - dataTypes.js:90", isAdmin1, isAdmin2);
isAdmin2 = false;
console.log("after change - dataTypes.js:92", isAdmin1, isAdmin2);

// ==================== BIGINT - ====================

//  Example 1
let population1 = 1400000000n;
let population2 = population1;
console.log("before change - dataTypes.js:99", population1, population2);
population2 = 1500000000n;
console.log("after change - dataTypes.js:101", population1, population2);

//  Example 2
let distance1 = 999999999999n;
let distance2 = distance1;
console.log("before change - dataTypes.js:106", distance1, distance2);
distance2 = 111111111111n;
console.log("after change - dataTypes.js:108", distance1, distance2);

//  Example 3
let accountNumber1 = 123456789012345n;
let accountNumber2 = accountNumber1;
console.log("before change - dataTypes.js:113", accountNumber1, accountNumber2);
accountNumber2 = 987654321098765n;
console.log("after change - dataTypes.js:115", accountNumber1, accountNumber2);

// ==================== NULL ====================

//  Example 1
let teacher1 = null;
let teacher2 = teacher1;
console.log("before change - dataTypes.js:122", teacher1, teacher2);
teacher2 = " Sir";
console.log("after change - dataTypes.js:124", teacher1, teacher2);

//  Example 2
let manager1 = null;
let manager2 = manager1;
console.log("before change - dataTypes.js:129", manager1, manager2);
manager2 = " Ma'am";
console.log("after change - dataTypes.js:131", manager1, manager2);

//  Example 3
let selectedCar1 = null;
let selectedCar2 = selectedCar1;
console.log("before change - dataTypes.js:136", selectedCar1, selectedCar2);
selectedCar2 = "Swift";
console.log("after change - dataTypes.js:138", selectedCar1, selectedCar2);

// ==================== UNDEFINED ====================

//  Example 1
let phoneNumber1;
let phoneNumber2 = phoneNumber1;
console.log("before change - dataTypes.js:145", phoneNumber1, phoneNumber2);
phoneNumber2 = "9876543210";
console.log("after change - dataTypes.js:147", phoneNumber1, phoneNumber2);

//  Example 2
let address1;
let address2 = address1;
console.log("before change - dataTypes.js:152", address1, address2);
address2 = "Rajkot, Gujarat";
console.log("after change - dataTypes.js:154", address1, address2);

//  Example 3
let hobby1;
let hobby2 = hobby1;
console.log("before change - dataTypes.js:159", hobby1, hobby2);
hobby2 = "Cricket";
console.log("after change - dataTypes.js:161", hobby1, hobby2);

// ==================== SYMBOL ====================

//  Example 1
let token1 = Symbol("auth");
let token2 = token1;
console.log("before change - dataTypes.js:168", token1, token2);
token2 = Symbol("guest");
console.log("after change - dataTypes.js:170", token1, token2);

//  Example 2
let sessionId1 = Symbol("session1");
let sessionId2 = sessionId1;
console.log("before change - dataTypes.js:175", sessionId1, sessionId2);
sessionId2 = Symbol("session2");
console.log("after change - dataTypes.js:177", sessionId1, sessionId2);

//  Example 3
let uniqueKey1 = Symbol("key1");
let uniqueKey2 = uniqueKey1;
console.log("before change - dataTypes.js:182", uniqueKey1, uniqueKey2);
uniqueKey2 = Symbol("key2");
console.log("after change - dataTypes.js:184", uniqueKey1, uniqueKey2);
