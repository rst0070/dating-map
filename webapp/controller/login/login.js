const express = require('express');
const https = require('https');
const router = express.Router();
const model = require('../../model/login/login.js');

router.get('/', (req, res)=>{
		res.render('login/login');
});

router.post('/do-login', (req, res)=>{
	var id = req.body.id;
	var pw = req.body.pw;

	//model을 통해 사용자 정보가 맞는지 확인한다.
	model.checkIdPw(id, pw, (err, valid)=>{
		if(err){
			res.redirect('/login');
		}else{
			if(valid){
				req.session.user_id = id;
				req.session.login = true;
				res.redirect('/');
			}else{
				res.redirect('/login');
			}
		}
		
	});
});

/** kakao login */
router.get('/authcode', (req, res)=>{
	getToken(req.query.code,(isErr, value)=>{
		if(isErr){
			res.redirect('/login');
			return;
		}
		req.session.access_token = value.access_token;
		console.log('dadsd');
		//getting user_id (unique and immortal data)
		var idReq = https.request('https://kapi.kakao.com/v2/user/me',
			{
				method: 'GET',
				headers: {Authorization: value.access_token}
			},
			(data)=>{
				console.log(data);
				res.end("<p>ddd</p>");
			}
		);
		idReq.end();
	});
  
});

router.get('/signup',(req, res)=>{

});

/**
 * @param authcode {string} : authcode that from client get query
 * @param callback {function(err, data)} err is boolean which present error is occured or not.
 * 		data contains access_token and etc.
 */
function getToken(authcode, callback){

	var data =JSON.stringify( {
		grant_type: "authorization_code",
		client_id: '6037a18c275805129ccd6ecac305122e',
		//client_id: "db944c1a0b165f52f3eb267d261c58f7",
		redirect_uri: "http://127.0.0.1/login/authcode",
		code: authcode,
		client_secret:"NKp19wUoHhwYLofnN6jxhIZhkStd1lST"
	});
	var tokenRequest = https.request('https://kauth.kakao.com/oauth/token',{	
		method: 'POST',
		headers: {
			'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
			//,'Content-Length': Buffer.byteLength(data)
		}}
		,(res)=>{
			var data = "";
			res.on('readable',()=>{
				data += res.read();
				if(data.access_token){
					callback(false,data);
				}else{
					console.log('error: '+data);
					callback(true, data);
				}
			});
		});
	tokenRequest.end(data);
}
module.exports = router;
