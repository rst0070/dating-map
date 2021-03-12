const express = require('express');
const router = express.Router();
const model = require('../../model/login/signup');

router.get('/',(req, res)=>{
	res.render('login/signup');
});

router.post('/id-check', (req, res)=>{
	console.log('id checking');
	model.id_check(req.body.id+'', (valid)=>{
		res.json({valid: valid});
	});
	
});

router.post('/enroll', (req, res)=>{
	const id = req.body.id;
	const pw = req.body.pw;
	model.enroll(id, pw, (err)=>{
		if(err){
			res.json({valid: false});
		}else{
			res.json({valid: true});
		}
	});
})
module.exports = router;
