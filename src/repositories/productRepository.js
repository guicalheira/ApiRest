const products = [{
    id:1,
    nome:"geladeira",
    preco: 2500
},
{
    id:2,
    nome:"smartphone",
    preco: 2000
}
]


class ProductRepository{
findAll(){
return products;
}
findById(id){
    id = Number(id);
    return products .find((product)=>product.id === id)
}
insert (nome,preco){
    const newProduct = {
        id: products.length + 1,
        nome: nome, 
        preco: preco 
    }

   products.push(newProduct);
   return newProduct;
}
delete(id) {
    return products = products.filter((product) => product.id !== id);
  }
}
module.exports = new ProductRepository();