var input = process.argv;
// console.log(input);
// entry in terminal --> node calculator.js exp 23 54

var operator = input[2];
var num1 = input[3];
var num2 = input[4];

// console.log(operator);
// console.log(num1);
// console.log(num2);
// entry in terminal -> node calculator.js exp 23 54 

if (operator == "add"){
    console.log(parseFloat(num1) + parseFloat(num2));
}
else if (operator == "subtract"){
    console.log(parseFloat(num1) - parseFloat(num2));
}
else if (operator == "multiply"){
    console.log(parseFloat(num1) * parseFloat(num2));
}
else if (operator == "divide"){
    console.log(parseFloat(num1) / parseFloat(num2));
}
else if (operator == "exp"){
    console.log(parseFloat(num1) ^ parseFloat(num2));
}
else if (operator == "remainder"){
    console.log(parseFloat(num1) % parseFloat(num2));
}
else {
    console.log("Operator not found")
}