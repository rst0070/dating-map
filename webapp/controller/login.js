const express = require('express');
const https = require('https');
const router = express.Router();


router.get('/', (req, res)=>{
		res.render('login');
});
router.get('/authcode', (req, res)=>{
	getToken(req.query.code,(value)=>{
		
	});
  
});

router.get('/signup',(req, res)=>{

});

/**
 * @param authcode {string} : authcode that from client get query
 */
function getToken(authcode, callback){

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
		},(res)=>{
			callback(res);
		}
	});
	tokenRequest.end(data);
}
module.exports = router;
