const express = require( 'express' );
const port = 3000;
const morgan = require( 'morgan' );
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', {noCache: true}); // apunta a nunjucks al directorio correcto para los templates

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//res.render( 'index', {title: 'Hall of Fame', people: people});

app.get('/', (req, res) => res.render( 'index', {title: 'Hall of Fame', people: people}));

app.use(morgan("tiny"))

app.use('/special', (req, res, next) => {
    console.log("Aca usamos SPECIAL");
    next();
    })

app.get('/is-anybody-in-there', (req, res) => res.send('Hola!!'))

app.get('/special', (req, res) => res.send('Hola SPECIAL!!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

