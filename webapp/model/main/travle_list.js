const db = require('../db.js');

var model = {};

/**
 * main페이지(사용자의 여행목록을 보여주는 페이지) 에 간단하게 보여줄 여행목록을 가져온다.
 * travle_list.travle = {
 *  title, start, end, travle_id
 * }
 * @param {string} user_id : 가져올 travle list 의 사용자 아이디.
 * @param {function(travle_list)} callback : 위의 travle_list 배열을 받는다.
 */
model.getTravleList = (user_id, callback) => {
    var travle_list = [];
    travle_list.push({
        travle_id : 1234,
        start : '2021/03/04',
        end : '2021/03/12',
        title: '부산여행'
    });
    travle_list.push({
        travle_id : 1234,
        start : '2021/03/04',
        end : '2021/03/12',
        title: '부산여행'
    });
    travle_list.push({
        travle_id : 1234,
        start : '2021/03/04',
        end : '2021/03/12',
        title: '부산여행'
    });
    travle_list.push({
        travle_id : 1234,
        start : '2021/03/04',
        end : '2021/03/12',
        title: '부산여행'
    });
    callback(travle_list);
}

model.addTravle = (owner_id, data) => {
    db.query({
        text : '',
        values : []
    },)
}
model.userInformation = ()=>{

}
module.exports = model;