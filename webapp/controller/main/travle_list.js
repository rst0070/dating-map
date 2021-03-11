const express = require('express');
const router = express.Router();
const model = require('../../model/main/travle_list.js')

/**
 * travle_list.travle = {
 *  title, start, end, travle_id
 * }
 */
router.get('/', (req, res)=>{
    model.getTravleList('dsdsdd', (travle_list)=>{
        res.render('main/travle_list', {user : {id : 'wonbin'}, travle_list : travle_list});
    });
});

module.exports = router;