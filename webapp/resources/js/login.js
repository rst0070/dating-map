Kakao.init("ed86d57ca1f786008dad33bfb76f05ea");		

function kakaoLogin(){
	Kakao.Auth.authorize({
		redirectUri:"http://127.0.0.1:3000/login/authcode"
	});
}
$('#login-box *').width($('#quokka').width());
$('#login-box Button').width('90%');