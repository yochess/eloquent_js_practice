/*
Chapter 4 Exercises - Linked List

A list

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

/*
  instructions:
  1. arrayToList([10, 20])
     => {value: 10, rest: {value: 20, rest: null}}
  2. listToArray(arrayToList([10, 20, 30]))
     => [10, 20, 30]
  3. prepend(10, prepend(20, null))
     => {value: 10, rest: {value: 20, rest: null}}
  4. nth(arrayToList([10, 20, 30]), 1)
     => 20
*/

/* 
array list - pseudo logic

- return an object with
  a. value: a number
  b. rest: a nested object

if arr == [10]    then return { value: 10, rest: null }
if arr == [10,20] then return { value: 20, rest: { value: 10, 
                                                   rest: null
                                                 }
- strategy from the book:
  loop through the array from last to first
  (since the object is growing, start from inside
    set value equal to arr[i]
    set rest equal to arr.rest
    ( rest: { value: 20, rest: null } )

- recursive strategy:
  return null if arr.length === 0
  return { value: arr[0], rest: arrayToList(arr[1..-1]);
*/

function arrayToList(nums) {
  var output = null;

  for(var i = nums.length -1; i >= 0; i--) {
    output = { value: nums[i], rest: output };
  }
  return output;
};

function arrayToList_2(nums) {
  if(nums.length === 0) {
    return null
  }

  return { value: nums[0], rest: arrayToList_2(nums.slice(1)) };
}

var my_nums = [10, 20,30]

console.log(arrayToList(my_nums));
console.log(arrayToList_2(my_nums));



/*
list to array - pseudo logic

while rest != null
  append value 

or

list.value + listToArray(list.rest)
*/

function listToArray(list) {
  var output = [];

  while(list) {
    output.push(list.value);
    list = list.rest;
  }

  return output;
};

function listToArray_2(list) {
  if(list.rest === null) return [list.value];
  return [list.value].concat(listToArray_2(list.rest));
}

console.log(listToArray(arrayToList(my_nums)));
console.log(listToArray_2(arrayToList(my_nums)));



/*
prepend - logic

prepend(10, null)
=> { value: 10, rest: null }

prepend(10, prepend(20, null) )
prepend(10, { value: 10, rest: null })
=> { value: 10, rest: { value: 20, rest: null }}

prepend returns an object! this is more complicated than it looks
*/

function prepend(value, rest) {
  return {value: value, rest: rest};
};

console.log(prepend(10, prepend(20, null)));



/*
nth - logic

- pass in a list and n
- return the nth value in the list

*/

function nth(list, n) {
  for(var i = 0; i < n; i++) {
    list = list.rest;

  }
  return list.value;
};

function nth_2(list, n) {
  if(n === 0) return list.value;
  return nth_2(list.rest, n-1);
}

var list = arrayToList([10, 20, 30])
    
console.log(nth(list, 1));
console.log(nth_2(list, 1));
console.log(list);
