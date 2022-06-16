const products = require('../mock/products')

const addNewProduct = (req, res) => {
    try{

    
        const {titulo, precio, imagen} = req.body;
        if(isNaN(Number(precio))){
            const error = new Error('El precio ingresado tiene que ser un numero!')
            res.httpStatusCode(400)
            return next(error, req, res)
        }
        else{
            if(products.length === 0){
                const id = 1
                products.push({titulo, precio, imagen, id})
                return res.status(201).json(products)
            }
            else{
                const lastId = products[products.length - 1].id
                const id = lastId + 1
                products.push({titulo, precio, imagen, id})
                return res.status(201).json(products)
            }
        }
    }catch(e){
        console.log("Error: ", e)
    }

}

module.exports = addNewProduct