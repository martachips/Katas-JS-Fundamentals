//! 
for (let i = 0; i <= 9; i++){
  console.log(i);
};  // ✅

//! 
for (let i = 0; i <=9; i++) {
  let num = i;
  if (num % 2 === 0){
    console.log(num);
  };
};

//! 
for (let i = 0; i <= 10; i++){
  let dormir = i;
  console.log(dormir);
  if (i === 10) {
    console.log("i");
  } else {console.log("intentando dormir")}
};

