const express = require( 'express' );
const port = 3000;
const morgan = require( 'morgan' );
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use(express.static('public'));

app.use('/', routes);

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', {noCache: true}); // apunta a nunjucks al directorio correcto para los templates

//const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


//app.get('/', (req, res) => res.render( 'index', {title: 'Hall of Fame', people: people}));

app.use(morgan("tiny"))







app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

