const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('usuarios desde la BD');
});

router.get('/users/signin', (req, res) => {
    res.send('Logeo de Usuario');
});

router.get('/users/signup', (req, res) => {
    res.send('Registro de Usuario');
});
module.exports = router;