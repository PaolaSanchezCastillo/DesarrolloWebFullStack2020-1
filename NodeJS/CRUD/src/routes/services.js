const express = require('express');
const router = express.Router();

router.get('/services', (req, res) => {
    res.send('Salida de Servicios');
});

module.exports = router;