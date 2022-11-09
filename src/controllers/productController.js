const ProductRepository = require ('../repositories/productRepository.js')

class ProductController{
    index(request,response){
const products = ProductRepository.findAll();
response.json(products);
    }
    show(request,response){
        const id = request.params.id;
        const product = ProductRepository.findById(id);
        if(!product){
            return response.status(404).json({erro:"Produto não encontrado"})
        }
        response.json(product);
    }
    create(request,response){
        const {nome,preco} = request.body
        const newProduct = ProductRepository.inset(nome,preco)
        response.status(201).json(newProduct);
        if(!nome || !preco){
            return response.status(404).json({erro:"Necessario preencher o nome e o preço do produto"})
        }
        delete(request,response)
        {
            const {id} = request.params;
            const hasContact = ProductRepository.findById(id);
        }
    }
}
module.exports = new ProductController();