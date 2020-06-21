var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


//SESSION 

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res, next) {
    req.session.mail = req.body.mail;
    var pagina = '<!DOCTYPE html><html lang="en"  <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body>' +
        '<p>Se creo la session, puedes entrar al panel de control</p>' + '</br><a href="/">Retornar</a>' + '</body>  </html>';
    res.send(pagina);

});

router.get('/panel', function(req, res, next) {

    if (req.session.mail) {
        var pagina = '<!DOCTYPE html><html lang="en"  <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body>' +
            '<h1>Bienvenido</h1>' + req.session.mail + '<a href="/">Retornar</a>' +
            '<a href="/logout">Logout</a>' +
            '</body>  </html>';
        res.send(pagina);
        // Lo ideal seria poner un res.render que apuntara a una elemento dentro de views
    } else {
        var pagina = '<!DOCTYPE html><html lang="en"  <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body>' +
            '<h1>No tienes derecho a acceder</h1>' + '<a href="/">Retornar</a>' +

            '</body>  </html>';
        res.send(pagina);
        // Lo ideal seria poner un res.render que apuntara a una elemento dentro de views
    }

});

router.get('/logout', function(req, res, next) {
    req.session.destroy(); // destruir la sesion anterior
    var pagina = '<!DOCTYPE html><html lang="en"  <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body>' +
        '<h1>Se ha cerrado la session</h1>' + '<a href="/">Retornar</a>' +
        '<a href="/">Retornar</a>' +
        '</body>  </html>';
    res.send(pagina);
})





//Login

/* router.get('/login', function(req, res, next) {
    if (req.cookies.mail) // Si hay una coocke (TRUE) 

    {
        console.log(req.cookies);
        res.render('login', { mail: req.cookies.mail }); // RENDERIZA EL VALOR DE DICHA COOKIE
    } else {
        res.render('login');
    }
});
 */
/* 
COOKIE
router.post('/login', function(req, res, next) {
    console.log('ENTRO');

    res.cookie('mail', req.body.mail, { expires: new Date(Date.now() + (60 * 60 * 24)) }); // especificar el tiempo de vida de la coockie asi como su extracctonr
    console.log('Cuando se genera la coockie');
    console.log(req.cookie);
    var pagina = '<!DOCTYPE html><html lang="en"  <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body>' +
        '<p>Se creo la coockie</p>' + '<a href="/">Retornar</a>' + '</body>  </html>';
    res.send(pagina);
});
 */


module.exports = router;