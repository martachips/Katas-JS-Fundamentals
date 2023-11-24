function largestNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else { 
    return num2;
  }
};

const number1 = 20;
const number2 = 35;

const resultado = largestNum(number1, number2);
console.log(resultado);