const express = require( 'express' );
const port = 3000;
const morgan = require( 'morgan' );
const app = express();

app.use(morgan("tiny"))

app.use('/special', (req, res, next) => {
    console.log("Aca usamos SPECIAL");
    next();
    })

app.get('/is-anybody-in-there', (req, res) => res.send('Hola!!'))

app.get('/special', (req, res) => res.send('Hola SPECIAL!!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))