module.exports = (req, res, next)=>{
	if(req.session.login != "true" && 
	req.path != "/login"){
		res.redirect('/login');
	}
	next();
}
