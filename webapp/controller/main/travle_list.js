const express = require('express');
const router = express.Router();
const model = require('../../model/main/travle_list.js')

/**
 * travle_list.travle = {
 *  title, start, end, travle_id
 * }
 */
router.get('/', (req, res)=>{
    model.getTravleList(req.session.user_id, (travle_list)=>{
        res.render('main/travle_list', {user : {id : req.session.user_id}, travle_list : travle_list});
    });
});

router.get('/add_travle', (req, res)=>{
    res.render('main/add_travle');
});

router.post('/add_travle', (req, res)=>{
    var data = {
        title : req.body.title,
        start_date : req.body.start_date,
        end_date : req.body.end_date,
        description : req.body.description
    }
    model.addTravle(data);
});
module.exports = router;