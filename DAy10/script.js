/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let randnumber = Math.random();
let x, y, z;

if (randnumber < 0.33) {
  x = "Crazy";
} else if (randnumber < 0.66 && randnumber >= 0.33) {
  x = "Amazing";
} else {
  x = "Fire";
}

randnumber = Math.random();
if (randnumber < 0.33) {
  y = "Engine";
} else if (randnumber < 0.66 && randnumber >= 0.33) {
  y = "Foods";
} else {
  y = "Garments";
}
randnumber = Math.random();

if (randnumber < 0.33) {
  z = "Bros";
} else if (randnumber < 0.66 && randnumber >= 0.33) {
  z = "Limited";
} else {
  z = "Hub";
}
 console.log(`${x} ${y} ${z}`)