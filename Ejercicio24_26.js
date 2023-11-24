// Bucle para sumar el total de las ventas de todos los productos

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let sum = 0;
let result = 0;
//   for (let i = 0; i < products.length; i++) {
//    sum += products[i].sellCount;
//    console.log(sum);
 
//  }; 

//  products.forEach(product => {
//    sum += product.sellCount;
//  });
//  console.log(sum);


//! Ejercicio 25 - lo anterior más hacer la media de precio de los productos
  for (let i = 0; i < products.length; i++) {
   sum += products[i].sellCount / 4;
   console.log(sum);
    
 }; 

 //! Ejercicio 26
const goodProducts = []; //más de 20 ventas
const badProducts = []; // menos de 20 ventas

for (let j = 0; j < products.length; j++) {
  if (products[j].sellCount < 20) {
    badProducts.push(products[j]);
  } else { goodProducts.push(products[j])}
};
console.log(goodProducts);
console.log(badProducts);