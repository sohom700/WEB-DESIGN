let a = Math.random();
let b = Math.random();
let c = Math.random();
let d = Math.random();
let e = Math.random();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
if (a <= 0.25) {
  document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "red";
    e.style.color="yellow";
  })
}
else if(a<=0.5 && a > 0.25){
    document.querySelectorAll(".box").forEach(e => {
        e.style.backgroundColor = "green";
        e.style.color="red";
      })
}

else if(a<=0.7 && a > 0.5){
    document.querySelectorAll(".box").forEach(e => {
        e.style.backgroundColor = "black"
        e.style.color="white";
      })
}

else if(a<=0.8 && a > 0.7){
    document.querySelectorAll(".box").forEach(e => {
        e.style.backgroundColor = "aqua";
        e.style.color="red";
      })
}
else {
    document.querySelectorAll(".box").forEach(e => {
        e.style.backgroundColor = "orange";
        e.style.color="brown";
      })
}
