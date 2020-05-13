const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', (req, res) => {
    let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});


/*
router.use('/:file', (req, res, next) =>{
	if (res.sendFile(req.params.file)){
		res.sendFile(req.params.file);
	} else next();
});
*/


router.get('/stylesheets/style.css', (req, res) => {
  res.sendFile('/stylesheets/style.css');
});


module.exports = router;