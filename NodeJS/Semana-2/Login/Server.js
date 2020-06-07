const express = require('express');
//Importar passport (3) 
const passport = require('passport');
//(4) 
const cookieParser = require('cookie-parser');
const session = require('express-session');
//(8)
const PassporLocal = require('passport-local').Strategy;

const app = express();







// Middleware de Express (4)

app.use(express.urlencoded({ extended: true }));
//Generar un secreto (5)

app.use(cookieParser('Este es un secreto'));

// (6)
app.use(session({
    secret: 'Secreto',
    resave: true, // en cada peticion aunque la sesion no se modifique se vuelve a guardar
    saveUninitilazer: true // si se inicializa una peticion vacia se guarda
}));

//(7)
// Inicializar 
app.use(passport.initialize());
// En el caso de uso de sesiones
app.use(passport.session());

// autentificacion (8)
passport.use(new PassporLocal(function(username, password, done) {
    console.log(username);
    console.log(password);
    if (username === 'Paola' && password === '120604') {

        return done(null, { id: 'Paola' });

    } else {
        done(null, false);
    }
}));

// Serializacion (9)

passport.serializeUser(function(user, done) {
    done(null, user.id);
})

//Deserializacion 

passport.deserializeUser(function(id, done) {
    done(null, { id: 'Paola' });
});


app.set('view engine', 'ejs');
// Esto al ultimo  (2)



app.get("/", function(req, res) {
    // Recibir las credenciales e iniciar sesion 

    res.render("Login");
});

app.get("/Bienvenido", function(req, res) {
    // Recibir las credenciales e iniciar sesion 

    res.render("Bienvenido");
});




app.get("/Login", function(req, res) {
    // Recibir las credenciales e iniciar sesion 

    res.render("Login");
});





app.post("/Login", passport.authenticate('local', {
    successRedirect: "/Bienvenido",
    failureRedirect: "/Login"
}));


app.listen(8090, () => console.log("Server Inicializado"));