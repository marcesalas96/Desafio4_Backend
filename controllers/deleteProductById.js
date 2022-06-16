const products = require('../mock/products');

const deleteProductById = (req, res) => {
    try {
        const id = req.params.id;
        const { titulo, precio, imagen } = req.body;
        if (isNaN(Number(id) || isNaN(Number(precio)))) {
            const error = new Error('El parámetro ingresado tiene que ser un numero!')
            res.httpStatusCode(400)
            return next(error, req, res)
        } else {
            const index = products.findIndex((item) => item.id === Number(id))
            let product = products[index]
            if (!product) {
                res.json({ error: 'producto no encontrado' })
            }
            else {
                products.splice(index, 1)
                res.json(products)
                res.status(202)
            }
        }
    }catch(e){
        console.log("Error: ", e)
    }
}
module.exports = deleteProductById