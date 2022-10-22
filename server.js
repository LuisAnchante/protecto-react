const express = require("express")
const app = express()


//improtr
const archivoBD = require("./conexion")

//impor routs
const rutaarticulo = require("./rutas/articulo")

//impor parse
const bodyParser = require("body-parser")
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/articulo', rutaarticulo)

app.get("/", (req, res) => {
    res.end("hola estas en la ruta")
})

//conf
app.listen(3000, function () {
  console.log("listening node on port 5000")
})
