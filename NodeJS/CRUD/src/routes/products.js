const express = require('express');
const router = express.Router();

router.get('/products/add', (req, res) => {
    res.render('products/addProduct')
});
router.post('/products/addProduct', (req, res) => {
    const { nombre, descripcion, cantidad } = req.body;
    console.log(req.body);
    const errors = [];
    if (!nombre) {
        errors.push({ text: 'Por favor, ingresa el nombre del producto' });
    }
    if (!descripcion) {
        errors.push({ text: 'Por favor, ingresa la descripcion del producto' });
    }
    if (!cantidad) {
        errors.push({ text: 'Por favor, ingresa la cantidad del producto' });
    }
    if (errors.length > 0) {
        res.render('products/addProduct', {
            errors,
            nombre,
            descripcion,
            cantidad
        });
    } else {
        res.send("Todo OK");
    }
});

router.get('/products', (req, res) => {
    res.send('Se devuelven todos los productos de la BD');
});

module.exports = router;