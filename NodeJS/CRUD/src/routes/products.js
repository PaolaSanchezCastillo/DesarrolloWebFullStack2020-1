const express = require('express');
const router = express.Router();
const Product = require('../model/Product'); // Para poder incluir el CRUD

router.get('/products/add', (req, res) => {
    res.render('products/addProduct')
});
router.post('/products/addProduct', async(req, res) => {
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
            }

        );

        console.log(errors);
    } else {

        // CREATE 
        const newProduct = new Product({ nombre, descripcion, cantidad });
        console.log(newProduct);
        await newProduct.save();
        // res.send("Todo OK");
        res.redirect('/products');
    }
});

router.get('/products', async(req, res) => {
    //res.send('Se devuelven todos los productos de la BD');
    //READ 
    const products = await Product.find().lean();
    res.render('products/allProducts', { products });
    console.log('Productos listados : ', products);
});

module.exports = router;