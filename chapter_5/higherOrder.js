/*
Chapter 5 - Higher Order functions
  a. forEach
  b. filter
  c. map
  d. reduce
*/

function forEach(ary, callback) {
  for(var i = 0; i < ary.length; i++)
    callback(ary[i]);
}

function filter(ary, callback) {
  var output = [];
  forEach(ary, function(elem) {
    if( callback(elem) )
      output.push(elem);
  });
  return output;
}

function map(ary, callback) {
  var output = [];
  forEach(ary, function(elem) {
    output.push( callback(elem) );
  });
  return output;
}

function reduce(ary, callback, initial) {
  var memo = initial;
  forEach(ary, function(elem) {
    memo = callback(memo, elem);
  });
  return memo;
}

var stuff = [1, 'a', false, undefined, null, [4,3], {one: 1, two: 2}]


// note: I'm using jsfiddle which for some reason won't let me pass
//       console.log as a callback directly

// 1. forEach
forEach(stuff, function(elem) {
  console.log(elem);
});


// 2. filter
var filtered = filter(stuff, function(elem) {
  return typeof elem === "object";
});
console.log(filtered); 
// outputs [null, array, and object]


// 3. map
var mapped = map(stuff, function(elem) {
  return typeof elem;
});
console.log(mapped); 
// => ["number", "string", "boolean", "undefined", "object", "object", "object"]

console.log(reduce([1,2,3,4], function(memo, elem) {
  return memo + elem;
}, 10)); 
// => 20
