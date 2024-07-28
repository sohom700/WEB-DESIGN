// using for loop
let a = 5,
  sum = 1;

for (let index = 1; index <= a; index++) {
  sum = sum * index;
}
console.log(`The result is=${sum}`);

// using reduce and using for loops

let num=prompt("Enter a number")
function factor(number){
let arr =[];
for (let index = 1; index <= num; index++) {
  arr.push(index);
}
console.log(arr)
let c= arr.reduce((a, b) => a * b);
return c;
}
console.log(factor(num))
