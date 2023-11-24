// Calcular promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let theAverage = 0;

  for (let i = 0; i < param.length; i++) {
    theAverage += param[i]/param.length;
  }
  return theAverage;
};

const result = average(numbers);
console.log(result); //23.4285...