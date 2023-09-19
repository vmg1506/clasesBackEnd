class productManager {
    constructor() {
        this.products = []
    }

    static id = 0

    addProduct(title, description, price, thumbnail, code, stock) {
        productManager.id++
        if(this.products.find((producto) => producto.code === code)){
            console.log("product already exist")
        }else{this.products.push({
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock,
            id: productManager.id
        })}
        
    }
    getProduct() {
        return this.products
    }

    getProductById(id) {
        if(!this.products.find((producto) => producto.id === id)){
            console.log("not found")
        }else{
            console.log("exist")
        }
    }
}

const productos = new productManager

productos.addProduct('celular', 'xiaomi redmi note 12 pro', 1700000, 'https://www.losdistribuidores.com/wp-content/uploads/2023/03/xiaomi-note-12-pro-4.webp', "product1", 10)
productos.addProduct('tv', 'samsung', 2000000, 'https://www.losdistribuidores.com/wp-content/uploads/2023/03/xiaomi-note-12-pro-4.webp', "product2", 10)
productos.addProduct('tablet', 'apple', 500000, 'https://tiendasishop.com/media/catalog/product/i/p/ipad_air_cellular_purple_pdp_image_position-1b_5g_coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', "product2", 10)

console.log(productos.getProduct())

console.log(productos.getProductById(2))
console.log(productos.getProductById(3))



