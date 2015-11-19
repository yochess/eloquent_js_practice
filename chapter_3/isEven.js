/*
Chapter 3 - Exercises: Recursion

We’ve seen that % (the remainder operator) can be used to test whether a 
number is even or odd by using % 2 to check whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The 
function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way 
to fix this?

*/

/* 
pseudo code

- return values:
  a. true
  b. false

- variables:
  a. int num

- function isEven( num ):
  a. base case:
     i.   return true if num ===  0
     ii.  return false if num ===  1 
     iii. return false if num === -1
  b. if num > 0
       call isEven( num - 2 )
     else if num < 0
       call isEven( -1 * num - 2 )
     else 
       return some kind of error message
*/

function isEven( num ) {
  if( num === 0 ) return true;
  if( num === 1 || num === -1 ) return false;

  if(      num > 0 ) return isEven( num - 2      );
  else if( num < 0 ) return isEven( -1 * num - 2 );
  else
    return "You did not enter a number!"
}

console.log(isEven(50)); // => true
console.log(isEven(75)); // => false
console.log(isEven(-1)); // => false
console.log(isEven(-8)); // => true
console.log(isEven("hello")); // => You did not enter a number!

/*
Analysis

The algorithm above is O(n). I'm pretty sure faster is possible given
the nature of this puzzle, but I guess that defeats the purpose of
this exercise.

   - divide by 2 over and over
   - if num isn't an integer then return false
   - return true if num == 2
   note: an edge case would be 0 or 1
*/
