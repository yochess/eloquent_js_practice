/* 
Chapter 3 - Exercises: Bean counting

You can get the Nth character, or letter, from a string by writing 
"string".charAt(N), similar to how you get its length with "s".length. The 
returned value will be a string containing only one character (for example, 
"b"). The first character has position zero, which causes the last one to be 
found at position string.length - 1. In other words, a two-character string 
has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns 
a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it 
takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to make 
use of this new function.
*/

/*
pseudo code/logic

A. countChar:

- return values: 
  1. number of characters

- variables:
  1. String entry    - the argument
  2. String target   - the optional parameter to look for 
  3. int counter = 0 - keeps track of the number of chars

- function countChar(entry, target):
  1. downcase the arguments
  2. set a counter to 0
  3. loop through the string
       increase counter if entry.charAt(i) equals target
  4. return counter

B. countBs - return countChar(entry, "B")
*/

function countChar(entry, target) {
  entry  = entry.toLowerCase();
  target = target.toLowerCase();
  var counter = 0;

  for(var i = 0; i < entry.length; i++)
    if(entry.charAt(i) === target) counter++;

  return counter;
}

function countBs(entry) {
  return countChar(entry, "B");
};

console.log(countBs("BBC")); // => 2
console.log(countChar("kakkerlak", "k")); // => 4
