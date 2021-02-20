const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	if(req.session.login){
		res.redirect('/');
	}else{
		res.render('login');
	}
});
router.post('/', (req, res)=>{
	const code = req.body.code;
	console.log(code);
	req.session.login = true;
	req.session.code = code;
});
module.exports = router;
