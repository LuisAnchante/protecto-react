const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alonso:luisalonso@proyectotienda.dk90our.mongodb.net/?retryWrites=true&w=majority');

const objetoBD = mongoose.connection

objetoBD.on('connected', () =>{console.log('connecion correo a mongodb')})

objetoBD.on('error', () =>{console.log(' error connecion correo a mongodb')})

module.exports = mongoose