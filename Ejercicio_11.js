//Calcular promedio de strings, pero esta vez con números en medio

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let suma = 0;

  for (let i = 0; i < param.length; i++) {
    if (typeof(param[i]) !== 'string') {
      suma += param[i];
     } else { suma += param[i];
    };
  }
  return suma;
};

const resultado = averageWord(mixedElements);
console.log(resultado);

//!NO ENTIENDO MUY BIEN QUÉ SE PIDE, YA VEREMOS LA SOLUCIÓN
