/*
Chapter 4 Exercise - The Sum of a Range

The introduction of this book alluded to the following as a nice way to 
compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an 
array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum 
of these numbers. Run the previous program and see whether it does indeed 
return 55.

As a bonus assignment, modify your range function to take an optional third 
argument that indicates the “step” value used to build up the array. If no 
step is given, the array elements go up by increments of one, corresponding to 
the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 
9]. Make sure it also works with negative step values so that range(5, 2, -1) 
produces [5, 4, 3, 2].
*/

/*
instructions:
  1. range( start, end ) returns an array of all nums from start to end
  2. sum( nums_array ) returns the sum of the array
  3. accept 3rd optional parameter called "steps" in range()
*/

function range( start, end, step ) {
  // optional parameter is set to itself
  // if it's null then it is set to 1 as a default
  var step = step || 1;
  var output = [];

  // go upwards if start is less than end
  // step should be positive, so adding it to i steps upwards
  if( start < end )
    for(var i = start; i <= end; i+= step)
      output.push(i);

  // go downwards if start is greater than end
  // step should be negative, so adding it to i steps downwards
  else if( start > end )
    for(var i = start; i >= end; i+= step)
      output.push(i);

  // return the number if start equals end
  else
    return [start];

  return output;
};

console.log( range( 1, 10,  2) ); // => [1, 3, 5, 7, 9]
console.log( range(10,  1, -5) ); // => [10, 5]
console.log( range(10, 10, 10) ); // => [5]

function sum( nums ) {
  return nums.reduce( function( a, b ) {
    return a + b;

  });

};

console.log(sum(range(1, 10))); // => 55



/* writing my own reduce method (with array as a parameter) */

function my_reduce( nums, callback, initial ) {

  // setting initial to the initial value or a default of index 0
  initial = initial || 0

  // updating the total
  var memo = nums[initial];

  // starting the loop 1 from the initial
  for(var i = initial+1; i < nums.length; i++) {

    // updating the memo with memo and the current index
    memo = callback( memo, nums[i] );
  }
  return total;
};

console.log( my_reduce(range(1,10), function(a,b) { return a + b; } ) );
