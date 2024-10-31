let name = "Jonathan"; // this variable is available in the entire program

if (name == "Jonathan") {
    name = "Cruz"; // name is still accessible here
    let helloStatement = "Hello there!";
    console.log(helloStatement);
}
// the line below will throw an error because helloStatement no longer exists here
// console.log(helloStatement);
console.log(name)