const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let sumaDeTodos = 0;

  for (let i = 0; i < param.length; i++) {
    sumaDeTodos += param[i]; //! LO IMPORTANTE AQUÍ ES += puesto que es lo que va haciendo la suma
  }
 return sumaDeTodos;
};

const resultado = sumAll(numbers)
console.log(resultado);

