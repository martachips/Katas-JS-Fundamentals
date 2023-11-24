// devolver el número de veces que se repite cada palabra

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];


function repeatCounter(param) {
  const repetitions = {};

  for (let i = 0; i < param.length; i++) {
  const word = param[i];
  if (!repetitions[word]){
    repetitions[word] = 1;
  } repetitions[word]++
};
  return repetitions
};

const words = repeatCounter(counterWords);
console.log(words);