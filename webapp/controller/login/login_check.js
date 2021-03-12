module.exports = (req, res, next)=>{
	console.log(req.path.substring(0,6));
	if(req.session.login != "true" || 
	(req.path.substring(0,6) != "/login")){
		res.redirect('/login');
	}
	next();
}
