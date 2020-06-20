var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


//Login

router.get('/login', function(req, res, next) {
    if (req.cookies.mail) // Si hay una coocke (TRUE) 

    {
        console.log(req.cookies);
        res.render('login', { mail: req.cookies.mail }); // RENDERIZA EL VALOR DE DICHA COOKIE
    } else {
        res.render('login');
    }
});


router.post('/login', function(req, res, next) {
    console.log('ENTRO');

    res.cookie('mail', req.body.mail, { expires: new Date(Date.now() + (60 * 60 * 24)) }); // especificar el tiempo de vida de la coockie asi como su extracctonr
    console.log('Cuando se genera la coockie');
    console.log(req.cookie);
    var pagina = '<!DOCTYPE html><html lang="en"  <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body>' +
        '<p>Se creo la coockie</p>' + '<a href="/">Retornar</a>' + '</body>  </html>';
    res.send(pagina);
});



module.exports = router;