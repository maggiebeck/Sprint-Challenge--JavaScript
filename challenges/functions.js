// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
var greetings = (f, l) => {
  return `Hello ${f} ${l}, nice to meet you!`
  }
  function output(fName, lName, fn) {
  return fn(fName, lName);
  }
  console.log(output("user fname", "user lname", greetings));


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (x,y) {
  return x + y;
}

function multiply (x,y) {
  return x * y;
}

function greeting (firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// the nested function can access the variable internal because the nestedfunction is nested to be defined within another function, but by definition, it can access all of the enclosing fucntions variables to carry out its function.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();