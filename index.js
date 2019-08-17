// Hoisting is a JavaScript mechanism where variables and function
// declarations are moved to the top of their scope before code execution. 

// console.log(a);
// var a;
// a = 100;
// console.log(a);


// console.log("sayHi", sayHi);

// var sayHi = function () {
//     console.log("Hi");
// }

// Closures, also known as lexical or function closures, are combinations
// of functions bundled together with references to their surrounding state.
// In other words, a closure give you access to an outer function’s scope from an
// inner function outside of its original usage.


// function first() {
//     console.log("first() called !!!!");
//     function second() {
//         console.log("second() called !!!!");
//         function third() {
//             console.log("third() called !!!!");
//         }
//         third();
//     }
//     second();
//     console.log("first() end !!!!");
// }
// first();



// function first() {
//     return function inner() {
//         console.log("Returned Fun");
//     };
// }
// var result = first();
// // console.log(result);

// result();




// function main(value) {
//     console.log("Value: ", value);
// }

// main(100);
// main("Vinod");



// function main(f) {
//     f();
// }

// function printNumber() {
//     console.log("Number");
// }


// function printString() {
//     console.log("String");
// }

// main(printNumber);



function math(option) {

    var PI = 3.14;

    if (option === 'add') {
        return function add(a, b) {
            return a + b;
        }
    }

    if (option === 'square') {
        return function square(a) {
            return a * a;
        }
    }

    return function multiplyByPI(n) {
        return n * PI;
    }
}

var result = math('abc');
console.log(result);
console.log(result(100));
