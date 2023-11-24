const placesToTravel = [
  {id: 5, name: 'Japan'}, 
  {id: 11, name: 'Venecia'}, 
  {id: 23, name: 'Murcia'}, 
  {id: 40, name: 'Santander'}, 
  {id: 44, name: 'Filipinas'}, 
  {id: 59, name: 'Madagascar'}
];


let places = []; // Si trabajo con bucle, la variable tiene que ir fuera
for (let i = 0; i < placesToTravel.length; i++) {
  
  if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40 ){
    places.push(placesToTravel[i]);
  } 
};
console.log(places);
