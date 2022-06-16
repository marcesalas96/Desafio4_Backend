const products = require('../mock/products')
const getProductById = (req, res) => {
    try{
        const id = req.params.id;
        if (isNaN(Number(id))) {
            const error = new Error('El parámetro ingresado tiene que ser un numero!')
            res.httpStatusCode(400)
            return next(error, req, res)
        } else {
            const index = products.findIndex((item) => item.id === Number(id))
            const product = products[index]
            if(!product){
                return res.json({error: 'producto no encontrado'})
            }
            else{
                return res.json(product)
            }
        }
    }catch(e){
        console.log("Error: ", e)
    }
}

module.exports = getProductById