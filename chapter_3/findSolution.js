/*
Chapter 3: Functions

Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite amount of new numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produce that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

*/

/* 
Logic + pseudo codes:

- return values: 
  a. a string containing the answer, or
  b. null

- variables:
  1. int target    = `arg` - the number to look for (eg. 13)
  2. int total     = 1     - the number to add 3 or multiply 5
  3. String output = "1"   - return value (eg. "(((1 * 3) + 5) * 3)"

- functions:
  1. findSolution( target )
     a. return find( total = 1, output = "1" )

  2. find( total, history )
     a. base cases: 
        i.  return null if total > target
        ii. return output if target equals total
     b. return both
        i.  find( total + 5, "(`output` + 5)" ), OR
        ii. find( total * 3, "(`output` * 3)" )
            - diagram for how output grows:
            -   "(1 + 5)"
            -  "((1 + 5) + 5)"
            - "(((1 + 5) + 5) + 5)"
            - etc
*/


/* 
Attempt 1:

function findSolution( target ) {
  var total  = 1;
  var output = "1";

  function find( total, output ) {
    if(      total == target ) return output;
    else if( total >  target ) return null;
    else
      return find( total + 5, "(" + output + ")" ) ||
             find( total * 3, "(" + output + ")" );
  }

  return find( total, output );
}

console.log( findSolution( 13 ) ); 
// => (((1)))
// ??????????????? what did i do wrong?
// ooooh I didn't add 3 or multiply 5 to the output!!

*/

function findSolution( target ) {
  var total  = 1;
  var output = "1";

  function find( total, output ) {
    if(      total == target ) return output;
    else if( total >  target ) return null;
    else
      return find( total + 5, "(" + output + " + 5)" ) ||
             find( total * 3, "(" + output + " * 3)" );
  }

  return find( total, output );
}

console.log( findSolution( 13 ) ); // => (((1 * 3) + 5) + 5)
console.log( findSolution( 100 ) ); // => null
console.log( findSolution( 231 ) ); // => ((((((((((((((((((((((((((((((((((((((((((((((1 + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5)

// new heuristics lesson:
// search for values that make sense FIRST 
// IT MAKES WAY MORE SENSE TO MULTIPLY FIRST NOW!!

function findSolution_2( target ) {
  var total  = 1;
  var output = "1";

  function find_2( total, output ) {
    if(      total == target ) return output;
    else if( total >  target ) return null;
    else
      return find_2( total * 3, "(" + output + " * 3)" ) ||
             find_2( total + 5, "(" + output + " + 5)" );
  }

  return find_2( total, output );
}

console.log( findSolution( 231 ) ); => ((((((((((((((((((((((((((((((((((1 * 3) * 3) * 3) * 3) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5) + 5)

// ok only SLIGHTLY better!
