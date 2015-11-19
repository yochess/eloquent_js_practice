/*
  Chapter 4 - Experimenting with for in loops
            - Also experimenting with callback functions (chapter 5)
*/

var a = "Harry Potter";
var b = 26;
var c = true;
var d = [1,2,3,4];
var e = {book: "harry potter", author: "JK Rowlings"};

var objects = {string: a, int: b, bool: c, array: d, obj: e};
var numbers = [a,b,c,d,e];

var print = function(elem) {
    console.log(elem);
};

var forEach = function(obj, callback) {
    
    if(typeof obj === "object") {
    	for(var key in obj) {
			callback(obj[key]);
    	}
    }
};

forEach(numbers, print);
// => Harry Potter
// => 26
// => true
// => [1, 2, 3, 4]
// => Object {book: "harry potter", author: "JK Rowlings"}

forEach(objects, print);
// => Harry Potter
// => 26
// => true
// => [1, 2, 3, 4]
// => Object {book: "harry potter", author: "JK Rowlings"}

print("1" in numbers); // => true
print("5" in numbers); // = false
print(numbers[1]);     // => 26
print(numbers['1']);   // => 26

print("bool" in objects); // => true
print("boat" in objects); // => false
// print(objects[bool]);  // => Uncaught ReferenceError: bool is not defined
print(objects['bool']);   // => true
print(objects.bool);      // => true
