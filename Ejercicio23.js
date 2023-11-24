// Un bucle para crear 3 arrays que filtren las películas por categorías. 
// Categorías por tiempo: menos de 100 min / entre 100-200 min / + 200 min  

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

 let movies100 = [];
 let movies100_200 = [];
 let movies200 = [];

for (let i = 0; i < movies.length; i++) {
 const movie = movies[i].durationInMinutes; 

 if (movie < 200 ) {
   movies100_200.push(movies[i]);
 } else { 
  movies200.push(movies[i]);
 } 
 if (movie < 100) {
  movies100.push(movies[i]);
 }  else {
movies100 = "There are no movies here" }
};

console.log(movies100); 
console.log(movies100_200);
console.log(movies200);