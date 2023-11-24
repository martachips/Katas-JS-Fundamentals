// REEMPLAZAR las comidas que NO sean veganas. Si son false, reemplazo por una fruta. Las frutas no pueden repetirse.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
console.log(foodSchedule.sort()); 

for (let i = 0; i < foodSchedule.length; i++){
  const food = foodSchedule[i];
    if (!food.isVegan) {
      food.name = fruits.shift(); // LO QUE HACE ES DEVOLVER EL VALOR QUE HA ELIMINADO, POR ESO COGE EL NOMBRE EN FOOD 
      food.isVegan = true;
    }
};

console.log(foodSchedule)