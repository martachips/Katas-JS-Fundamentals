//! EJERCICIO 1
let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = [h, y];

console.log(z); 

//! EJERCICIO 2 
let firstName = "Jon";
let lastName = "Snow";
let age = 29;

// console.log("Soy " + firstName); 
console.log(`soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`);

    //1.3
const toy1 = {
  name: "Buzz Lightyear",
  price: 29
};
const toy2 = {
  name: "Rayo McQueen", 
  price: 19
};

const sumPrices = toy1.price + toy2.price;

console.log(sumPrices);

    //1.4
let globalBasePrice = 10000;
const car1 = {name: "BMW n&n", basePrice: 50000, finalPrice: 60000};
const car2 = {name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000; 

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
//finalPrice tiene que tener como resultado la suma del basePrice + globalBasePrice actualizado

//! EJERCICIO 3
let u = 10 * 5;
console.log(u); // 50

let r = 10 / 2;
console.log(r); // 5

let g = 15 % 9; 
console.log(g); // 6
 
let p = 10;
let j = 5;
let o = p + j; 
console.log(o); // 15

let c = 10;
let m = 5;
let i = c * m;
console.log(i); // 50

//! EJERCICIO 4
const avengers = [ "Hulk", "Spiderman", "Black Panther"];
console.log(avengers[0]); 

avengers[0] = "IronMan";
console.log(avengers);

console.log(avengers.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters.length);
console.log(rickAndMortyCharacters[4]);

const charactersRickAndMorty = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lápiz López"];
  let eliminate = charactersRickAndMorty.pop();
console.log(charactersRickAndMorty);

for (let i = 0; i < charactersRickAndMorty.length; i++) {
  const chars = charactersRickAndMorty[i];
}
console.log(charactersRickAndMorty[0], charactersRickAndMorty[4]);

elim2 = charactersRickAndMorty.splice(1, 1);
console.log(charactersRickAndMorty);

//! EJERCICIO 5 
const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
  console.log('number1 es estrictamente igual a 10') }

  
 if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2") };

 if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
};

if (number3 != number1) {
  console.log("number3 es distinto a number1");
};

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1")
};

if ((number3 * 5 == number1) && (number1 * 2 == number2)) {
  console.log("number3 por 5 es igual a number1 y number1 por 2 es igual a number2");
};

if ((number2 / 2 == number1) || (number1 / 5 == number3)) {
  console.log("number2 entre 2 es igual a number1 o number1 entre 5 es igual a number3");
};




