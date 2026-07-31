let msg = "today we are learning coding";

console.log("msg  01_string_method.js:3 - 02_string_method.js:3", msg);

// ===== match() method ==> Searches string for a match and returns the result =====
console.log("Example 1: - 02_string_method.js:6", msg.match("Today"));
console.log("Example 2: - 02_string_method.js:7", msg.match("coding"));
console.log("Example 3: - 02_string_method.js:8", msg.match("Python")); 

// ===== repeat() method ==> Returns a new string with a specified number of copies =====
console.log("Example 1: - 02_string_method.js:11", msg.repeat(2));
console.log("Example 2: - 02_string_method.js:12", msg.repeat(1));
console.log("Example 3: - 02_string_method.js:13", msg.repeat(3));

// ===== replace() method ==> Replaces the first occurrence of a specified value =====
console.log("Example 1: - 02_string_method.js:16", msg.replace("Today", "Now"));
console.log("Example 2: - 02_string_method.js:17",msg.replace("learning", "practicing"));
console.log("Example 3: - 02_string_method.js:18",msg.replace("coding", "JavaScript"));

// ===== replaceAll() method ==> Replaces all occurrences of a specified value =====
console.log("Example 1: - 02_string_method.js:21", msg.replaceAll("a", "A"));
console.log("Example 2: - 02_string_method.js:22", msg.replaceAll("e", "E"));
console.log("Example 3: - 02_string_method.js:23", msg.replaceAll("o", "O"));

// ===== search() method ==> Searches for a match and returns the position =====
console.log("Example 1: - 02_string_method.js:26", msg.search("learning"));
console.log("Example 2: - 02_string_method.js:27", msg.search("coding"));
console.log("Example 3: - 02_string_method.js:28", msg.search("Python")); // not found -> -1

// ===== indexOf() with starting index ==> Finds index starting search from given position =====
console.log("Example 1: - 02_string_method.js:31", msg.indexOf("a", 5));
console.log("Example 2: - 02_string_method.js:32", msg.indexOf("e", 10));
console.log("Example 3: - 02_string_method.js:33", msg.indexOf("n", 15));

// ===== slice() method ==> Extracts a section of a string =====
console.log("msg example : - 02_string_method.js:36", msg);
console.log("Example 1: - 02_string_method.js:37", msg.slice(2));
console.log("Example 2: - 02_string_method.js:38", msg.slice(2, 10));
console.log("Example 3: - 02_string_method.js:39", msg.slice(-6));
