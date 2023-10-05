require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

const infoRender = {
    nombre: 'William Cruz',
    titulo: 'Curso Node'
}

//uso de handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

//servir contenido estatico
app.use( express.static('public'))

//renderizando las vistas
app.get('/', (req, res) => {
    res.render('home', infoRender);
});

app.get('/generic', (req, res) => {
    res.render('generic', infoRender);
});

app.get('/elements', (req, res) => {
    res.render('elements', infoRender);
});

app.get('*', (req, res) => {
    res.render('404', infoRender)
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
})

