const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

// let nombre = [];
// for (let i = 0; i < nameFinder.length; i++){
//   console.log(nameFinder[i]);
// };

// if (nameFinder.includes('Peggy')){
//   nombre.push('Jessica');
// };
// console.log(nombre);


function finderName(param, name) {
  for (let i = 0; i < param.length; i++){
    if (param[i] === name) {
      console.log("true");
      return i;
    } 
  }
 return false
};


 const nameFound = finderName(nameFinder, 'Peggy');
 console.log(nameFound);


