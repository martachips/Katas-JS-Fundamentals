//mostrar solo los que contengan "camiseta"

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

 
for (let i = 0; i < products.length; i++) {
  let newProduct = [];
  if(products[i].includes("Camiseta")) {
    newProduct.push(products[i]);
  } 
  console.log(newProduct)
};

