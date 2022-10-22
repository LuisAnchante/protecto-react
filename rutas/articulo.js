const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const esquema = mongoose.Schema;

const esquemaarticulo = new esquema({
  nombre: String,
  precio: String,
  imagen: String,
  idArticulo: String,
});

const ModeloArticulo = mongoose.model("articulos", esquemaarticulo);
module.exports = router;

router.get("/ejemplo", (req, res) => {
  res.end("saludo desde la ruta ejemplo");
});

router.post("/agregar", (req, res) => {
    const nuevoarticulo = new ModeloArticulo({

        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen
    })
    res.end("saludo desde la ruta ejemplo");
  });


module.exports = router;
