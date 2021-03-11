const express = require('express');
const router = express.Router();
const model = require('../../model/main/travle.js');
/**
 * travle id를 받아서 해당 travle의 정보를 가져와 보여준다.
 * 
 * locations.location = {
 * 	date, x, y,
 * 	contents : {
 * 		title, description, photos
 * 	}
 * }
 */
router.get('/', (req, res)=>{
	const id = req.query.travle_id;
	/*
		data 받아오기...
	*/
	res.render('main/travle');
});

module.exports = router;
