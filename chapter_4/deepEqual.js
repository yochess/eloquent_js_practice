/*
Chapter 4 Exercises - Deep Comparison

The == operator compares objects by identity. But sometimes, you would prefer 
to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if 
they are the same value or are objects with the same properties whose values 
are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator 
for that) or by looking at their properties, you can use the typeof operator. 
If it produces "object" for both values, you should do a deep comparison. But 
you have to take one silly exception into account: by a historical accident, 
typeof null also produces "object".
*/

/* 
THIS IS VERY TOUGH for me!!!!!!

note: I've seen the solution like 10x so I should have a good sense on 
      how to solve this. I don't think I can solve a similar problem. I
      understand the logic, but I don't think I'll cover all possible
      cases.

- return
  0. return true if objects are equal

  1. false if parameters:
     a. are not objects or null
     b. has different keys
     c. has different properties (recursion used)
     d. has different lengths
  2. true - otherwise true

*/

function deepEqual(obj_1, obj_2) {
  // base case
  if(obj_1 === obj_2) return true;

  // return false if not object or null
  if(typeof obj_1 !== "object" || obj_1 === null ||
     typeof obj_2 !== "object" || obj_2 === null)
    return false;

  // compare lengths, return false if lengths are not equal at the end
  var aLength = 0;
  var bLength = 0;

  for(var keys in obj_1)
    aLength++;

  for(var keys in obj_2) {
    bLength++;

    // check if keys are the same
    if((keys in obj_1) === false) return false;

    // check properties now (via recursion)
    if(deepEqual(obj_1[keys], obj_2[keys]) === false) return false;
  }

    // check whether lengths are the same
    if(aLength !== bLength) return false;

    // if all conditions are met, return true
    return true;
};

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));                           // => true
console.log(deepEqual(obj, {here: 1, object: 2}));          // => false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // => true
