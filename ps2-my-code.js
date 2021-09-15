/**
 * SI 579: Problem Set 2 - JavaScript Tests
 * 
 * Do at least three of the four following problems. Load "ps2-tests.html" in your browser to view the results.
 */

/**
 * Define `addOne` as a function that expects one argument (a number)
 * and returns that argument's value plus one.
 */

function addOne(x) {
  return x + 1;
}


/**
 * Define `largest` as a function that expects one argument (an array of numbers)
 * and returns the largest item in that array.
 */

function largest(lst) {

  let number = lst[0];
 
  for (let i=0; i < lst.length; i++)
  {
    if (number < lst[i]){
      number = lst[i];
    }
    
  }
  return number;
}

/**
 * The *factorial* of a number n is denoted as: n! === n * (n-1) * (n-2) * ... * 1
 * 
 * For example, 4! === 4 * 3 * 2 * 1 === 24
 * Another example: 6! === 6 * 5 * 4 * 3 * 2 * 1 === 720
 * 
 * Define a function `fact` that accepts one argument (a positive integer n) and returns n!
 * 
 * Note: 0! is 1
 */

function fact(n) {
  var factorial = 1;

  for (let i=1; i <= n; i++){
    factorial = factorial * i;
  }
  return factorial;
  
}

/**
  * A Fibonacci sequence is the integer sequence 0, 1, 1, 2, 3, 5, 8...
  * the first two numbers are 0 and 1 and every number thereafter is the sum
  * of the previous two numbers. Write a function named `fib` that accepts
  * one argument (a number n) and returns the n-th element of the Fibonacci sequence.
  * 
  * You should assume that n is zero-indexed (meaning fib(0) == 0).
  * Example calls:
  * 
  * fib(0) === 0
  * fib(1) === 1
  * fib(2) === 1
  * fib(3) === 2
  * fib(4) === 3
  * fib(5) === 5
  * fib(6) === 8
  * ...
  * 
  * You can assume that the argument, n, is a positive integer. Do not worry about efficiency.
  */

function fib(n) {
  let fib = [0, 1];

  if (n == 0){
    return 0;
  }

  else if (n ==1){
    return 1;
  }
  else{
    let i =2; 
    while (i <= n){
      sum = fib[fib.length-1] + fib[fib.length-2];
      fib.push(sum);
      i++
      console.log(i);
    }
  

    return fib[fib.length-1]
  }
}