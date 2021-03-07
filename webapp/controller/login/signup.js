const express = require('express');
const router = express.Router();
const model = require('../../model/login/signup');

router.get('/',(req, res)=>{
	res.render('login/signup');
});

router.post('/id-check', (req, res)=>{
	var valid = model.id_check(req.body.id);//boolean;
	res.end({valid: valid});
});
module.exports = router;
