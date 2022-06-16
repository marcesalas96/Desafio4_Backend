//Require modules
const express = require('express');
const app = express();
const rutas = require('./routes/index')

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(__dirname + '/public'))

//Routes
app.use('/api/productos', rutas)
//Middleware Errors

// app.use((error, req, res) => {
//     res.status(error.httpStatusCode).send(error)
// })

//Server Listening
app.listen(8080,(e)=>{
    if(e){
        console.log(`Se produjo un error al iniciar el servidor: ${e}`)
    }else{
        console.log("Puerto escuchando en: 8080")
    }
})