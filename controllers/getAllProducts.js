const products = require('../mock/products')

const getAllProducts = (req, res) => {
    try{
        res.json(products)
    }catch(e){
        console.log("Error: ", e)
    }
}
module.exports = getAllProducts