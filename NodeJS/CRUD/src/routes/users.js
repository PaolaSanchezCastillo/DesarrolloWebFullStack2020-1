const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('usuarios desde la BD');
});

router.get('/users/signin', (req, res) => {
    res.render('signin.hbs')
});

router.get('/users/signup', (req, res) => {
    res.render('signup.hbs');
});
module.exports = router;