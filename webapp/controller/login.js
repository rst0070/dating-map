const express = require('express');
const http = require('http');
const router = express.Router();


router.get('/', (req, res)=>{
		res.render('login');
});
router.get('/authcode', (req, res)=>{
	console.log(req.query);
	const code = req.query.code;
	var data =JSON.stringify( {
		grant_type: "authorization_code",
		client_id: ,
		redirect_uri: "http://127.0.0.1/login/token",
		code: code
	});
	var tokenRequest = http.request({
		hostname: 'kauth.kakao.com',
		port: 80,
		path: '/oauth/token',
		method: 'POST',
		headers: {
			'Content-Type':'application/x-www-form-urlencoded;charset=utf-8',
			'Content-Length': Buffer.byteLength(data)
		}
	},(res)=>{
		console.log(res);
	});
	console.log(1111);
	

	tokenRequest.write(data);
	tokenRequest.end();
	console.log(2222);
	res.redirect('/');
	console.log(3333);
});
router.get('/token', (req, res)=>{
	console.log(req.query);
	console.log(req.body);
});
module.exports = router;
