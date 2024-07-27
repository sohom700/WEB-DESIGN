/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
- ---> /
* ---> +
/ ---> **


It performs wrong operation 10% of the times

*/
// const num1=parseInt(prompt('Enter a number'));
// const num2=parseInt(prompt('Enter second number'));
let a = prompt("Enter a number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");
let random = Math.random();
console.log(random);
let obj =
{
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}
if (random > 0.1) {
//  console.log(`result is ${a} ${c} ${b}`)
 alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
} else {
  c=obj[c]
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
 