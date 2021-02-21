const express = require('express');
const https = require('https');
const router = express.Router();


router.get('/', (req, res)=>{
		res.render('login');
});
router.get('/authcode', (req, res)=>{

	var data =JSON.stringify( {
		grant_type: "authorization_code",
		client_id: "db944c1a0b165f52f3eb267d261c58f7",
		redirect_uri: "http://127.0.0.1/login/authcode",
		code: req.query.code
	});
	var tokenRequest = https.request('https://kauth.kakao.com/oauth/token',{	
		method: 'POST',
		headers: {
			'Content-Type':'application/x-www-form-urlencoded;charset=utf-8',
			'Content-Length': Buffer.byteLength(data)
		}
	});

	tokenRequest.on('response',(r)=>{//receive token
		console.log(r);
		req.session.access_token = r.body.access_token;

		res.end(r.access_token);
	});
  tokenRequest.end(data);
});
module.exports = router;
