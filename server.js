const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Servidor activo y funcionando');
});

app.get('/estado', (req, res) => {
    res.json({
        estado: "Servidor funcionando",
        servicio: "API comunitaria"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
