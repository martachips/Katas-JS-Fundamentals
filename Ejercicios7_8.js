//! Ejercicio 7. Completa la función que tomando dos números como argumento devuelva el más alto.

// function sum(...numbers) {
  
//   let largestNumber = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//       largestNumber = numbers[i]
//     };
//   };
//   return largestNumber;
// };

// const theNumbers = [20, 45, 10, 45];

// const largestNumber = sum(...theNumbers);
// if (largestNumber !== undefined) {
//   console.log("El más alto es " , largestNumber);
// } else { console.log("no funciona")
// };

function masAlto(nOne, nTwo) {
  if (nOne > nTwo) {
    return nOne;
  } else {
    return nTwo;
  }
};

const number1 = 40;
const number2 = 75;

const numeroMasAlto = masAlto(number1, number2);

console.log('El número más alto es ' , numeroMasAlto);

//! EJERCICIO 8

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
  let longestWord = "";

  for (let i = 0; i < param.length; i++) {
    const word = param[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

const palabraMasLarga = findLongestWord(avengers);
console.log(palabraMasLarga);
