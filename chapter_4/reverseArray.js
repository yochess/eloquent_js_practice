/*
Chapter 4 Exercises - Reversing an array

Arrays have a method reverse, which changes the array by inverting the order 
in which its elements appear. For this exercise, write two functions, 
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array 
as argument and produces a new array that has the same elements in the inverse 
order. The second, reverseArrayInPlace, does what the reverse method does: it 
modifies the array given as argument in order to reverse its elements. Neither 
may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the 
previous chapter, which variant do you expect to be useful in more situations? 
Which one is more efficient?
*/

/*
Instructions/logic:
  1. write reverseArray
     a. loop through the array
          output = toAppend + output

  2. write reverseArrayInPlace
     a. loop through half of array length rounded down
        eg) [1,2,3,4,5,6] // 6/2 == 3 // => [1,2,3]
            [1,2,3,4,5]   // 4/2 == 2 // => [1,2]
          swap arr[i] with arr[ last - arr[i] ]

*/

function reverseArray(arr) {
  var output = [];

  for(var i = 0; i < arr.length; i++)
    output.unshift(arr[i]);

  return output;
};

function reverseArrayInPlace(arr) {
  var mid_i  = Math.floor(arr.length /2);
  var last_i = arr.length -1;
  var temp;
    
  for(var i = 0; i < mid_i; i++) {
    temp            = arr[i];
    arr[i]          = arr[last_i - i];
    arr[last_i - i] = temp;
  }
  return arr;
}

var nums = ['a','b','c','d','e']
console.log(reverseArray(nums));        // => ["e", "d", "c", "b", "a"]
console.log(reverseArrayInPlace(nums)); // => ["e", "d", "c", "b", "a"]
console.log(nums);                      // => ["e", "d", "c", "b", "a"]
console.log(reverseArrayInPlace(['a','b'])); // => ["b", "a"]
