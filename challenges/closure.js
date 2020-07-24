// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction is below internal function in the scope, and therefore can access anything above itself.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  const numbers = [];
  for(i=1; i<=number; i++){
    numbers.push(i);
  }
  const result = numbers.reduce(function(num, item){
    return num + item;
  },0);
  return result;  
}

console.log(summation(4));