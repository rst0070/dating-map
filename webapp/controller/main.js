const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	const data = {
		"부산여행":{"link":"https://rst0070.github.io"},
		"서울여행":{"link":"https://rst0070.github.io"}	
	};
	res.render('main', {travle_list: data});
});

module.exports = router;
