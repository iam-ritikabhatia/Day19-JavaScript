// toExponential() method is used to convert a number into exponential form by maintaining a certain precision

let a = 20.678917;
let b = a.toExponential(2); // means convert into exponential form by maintaining 2 numbers after decimal

console.log(b); 

// output is 8.01e+2


// toPrecision() method is used to define the significant figures

let a = 20.678917;
let b = a.toPrecision(3); // means convert into 3 significant figures 

console.log(b); 

// output is 20.7

// toLocaleString() method is used to convert into natitonality standards

let a = 1000000;
let b = a.toLocaleString(); // by defauilt it gives the output in US standards

console.log(b); 

// 1,000,000


let c = a.toLocaleString('en-IN') // it means Indian Standars

console.log(c)

// 10,00,000

// parseFloat() method is used to convert a string into floating point number

let a = "20.7";
console.log(parseFloat(a))

// parseFloat() method is used to retur the interger part

let a = "20.7";
console.log(parseInt(a))

// Output is 20

// isNaN() method is used to check whether a number is NaN or not, it's output is also logical, means true or false

let a = "10 Years Old";
console.log(isNaN(a))  // Output is true