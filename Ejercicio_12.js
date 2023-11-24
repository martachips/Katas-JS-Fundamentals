const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removesDuplicates(param) {
let newArray = [];
let count = {};
  for (let i = 0; i < param.length; i++){
    if (!count[param[i]]){
     newArray.push(param[i]);
     count[param[i]] = true; //En este caso, param es el nombre del parámetro de la función removesDuplicates, y se utiliza como un array dentro de la función. En JavaScript, los corchetes [] se utilizan tanto para acceder a elementos de un array como para definir la sintaxis de un array.
    } 
  }
    return newArray;
};

const notDuplicates = removesDuplicates(duplicates);
console.log(notDuplicates);
