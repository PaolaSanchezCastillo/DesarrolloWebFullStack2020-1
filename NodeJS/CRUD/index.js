const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));


app.use(methodOverride('method'));

//Routes

app.use(session({
    secret: 'Loquesea',
    resave: true,
    saveUninitialized: true
}));

//Rutas

app.use(require('./src/routes/index'));


app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto: ', app.get('port'));
})