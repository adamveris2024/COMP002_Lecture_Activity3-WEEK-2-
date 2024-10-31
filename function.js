// 3 ways to declare a function

// 1st method to create a function
const printHelloWorld = function() {
    // activities inside the function block
    console.log("Hello");
    console.log("World");
};

printHelloWorld();

// 2nd method to create a function
function printHelloWorld2() {
    console.log("printHelloWorld2() called!")
    console.log("Hello");
    console.log("World 2!");
};

printHelloWorld2(); // calls tje printHelloWorld2() function

// 3rd method to create a function (=> arrow notation)
const printHelloWorld3 = () => {
    console.log("printHelloWorld3() called!");
};

printHelloWorld3(); //calls the printHelloWorld3() function

/*******************************************************/
// function with a parameter

function printHelloWorld4(n) {
    console.log("Hello, " + n);
} // scope note: the variable name no longer exist when the function completes

printHelloWorld4("Jonathan")
printHelloWorld4("Adam")
printHelloWorld4("Verissimo")
printHelloWorld4("Me")

// function with multiple parameters
function printHelloWorld5(name1, name2, name3, name4, name5){
    console.log("Hello, ${name1}, ${name2}, &{name3} ${name4}, ${name5},"); // string interpolation example
}

printHelloWorld5("Matthew", "William", "Adam", "Rosa", "Alvaro");

// string output options (single-quotes, double quotes, and backticks)
let someVariable = "";
console.log('hello, ' + someVariable);
console.log("hello, " + someVariable);
console.log('hello,  ${someVariable}'); 

/**************************************** */
// function calling a function
function printHelloWorld6() {
    console.log("This is printHelloWorld6()");
}

function printHelloWorld7() {
    console.log("This is printHelloWorld7()");
    printHelloWorld6(); // calling a function inside another function
}

printHelloWorld7(); // prints both "This is printHelloWorld6()" and "This is printHelloWorld7()"
printHelloWorld6(); // print "This is printHelloWorld6()"

/**************************************** */

// recursion
const factorial = n => {
    if (n <= 1) {
        return 1; // the "base case"
    }

    return n * factorial(n - 1); // recursive call
};

console.log(factorial(5));

/**********************************/
// no return vs return value functions
function sum(num1, num2) {
    console.log(num1 + num2); // prints the sum of num1 and num2
}

function difference(num1, num2) {
    return num1 - num2; // returns the difference between num1 and num2 BUT it does not 
}

sum(2, 10);


let addTenToDifference = difference(10, 5) + 10;
console.log(addTenToDifference);
