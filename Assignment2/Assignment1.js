const double = x => x * 2
const square = x => x * x
// Tradition approach
var output1 = double(2);
var output2 = square(output1);
console.log(output2);
// variant two
var output_final = square(double(2));
console.log(output_final);
console.log("*********************************");

// with the help of compose function

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
const double1 = x => x * 2
const square1 = x => x * x

// function composition
var output_final = compose(square, double)(2);
console.log(output_final);

