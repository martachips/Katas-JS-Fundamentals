const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ];

console.log(toys[3].name.includes("gato"));

newToys = [];
for (let i = 0; i < toys.length; i++) {
  if (!toys[i].name.includes("gato")) {
    newToys.push(toys[i]);
  } 
};
console.log(newToys);

