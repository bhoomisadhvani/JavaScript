let msg = "today we are learning coding";

console.log("msg - 01_string_method.js:3", msg);


// ===== charAt() method ==> Returns the character at the specified index

// 1
console.log("Example 1: - 01_string_method.js:9", msg.charAt(0));  

// 2
 
console.log("Example 2: - 01_string_method.js:13", msg.charAt(6));  

// 3

console.log("Example 3: - 01_string_method.js:17", msg.charAt(20)); 

// ===== concat() method ==> Joins two or more strings and returns a new string =====

// 1

console.log("Example 1: - 01_string_method.js:23", msg.concat(" every day"));

// 2

console.log("Example 2: - 01_string_method.js:27", msg.concat(" with JavaScript"));

// 3

console.log("Example 3: - 01_string_method.js:31", msg.concat(" - ", "step by step"));

// ===== endsWith() method ==> Returns true if the string ends with the specified value =====

// 1

console.log("Example 1: - 01_string_method.js:37", msg.endsWith("coding"));

// 2

console.log("Example 2: - 01_string_method.js:41", msg.endsWith("Today"));

// 3

console.log("Example 3: - 01_string_method.js:45", msg.endsWith("learning"));

// ===== includes() method ==> Returns true if the string contains the specified value =====

// 1

console.log("Example 1: - 01_string_method.js:51", msg.includes("learning"));

// 2

console.log("Example 2: - 01_string_method.js:55", msg.includes("coding"));

// 3

console.log("Example 3: - 01_string_method.js:59", msg.includes("Python"));

// ===== indexOf() method ==> Returns the index of the first occurrence =====

// 1

console.log("Example 1: - 01_string_method.js:65", msg.indexOf("we"));

// 2

console.log("Example 2: - 01_string_method.js:69", msg.indexOf("coding"));

// 3

console.log("Example 3: - 01_string_method.js:73", msg.indexOf("Python")); 

// ===== lastIndexOf() method ==> Returns the index of the last occurrence =====

// 1

console.log("Example 1: - 01_string_method.js:79", msg.lastIndexOf("a"));


// 2

console.log("Example 2: - 01_string_method.js:84", msg.lastIndexOf("n"));
// 3

console.log("Example 3: - 01_string_method.js:87", msg.lastIndexOf("g"));

// ===== length property ==> Returns the total number of characters =====

// 1

console.log("Example 1: - 01_string_method.js:93", msg.length);

// 2

console.log("Example 2: - 01_string_method.js:97", msg.length);

// 3

console.log("Example 3: - 01_string_method.js:101", "".length); 