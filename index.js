const express = require('express');
const app = express();
const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_USER = process.env.DB_USER || 'usuario';
const DB_PASSWORD = process.env.DB_PASSWORD || 'secret';
const DB_NAME = process.env.DB_NAME || 'tienda';

const mongoURI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_NAME}`;


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));
app.get('/', (req, res) => {
    res.send('Servidor Express en Docker');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
