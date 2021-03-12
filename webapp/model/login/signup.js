const db = require('../db.js');//db 관련 객체
var model = {};

/**
 * 아이디로 사용할 수 있는지 체크한다.
 * @param {String} id : 체크할 아이디 값 
 */
model.id_check = (id, callback) => {
    db.query(
        {text: 'select user_id from user_data where user_id = $1',
        values: [id]},
    (err, res)=>{
        if(err){console.log(err);callback(false);}
        else {
            if(res.rows.length < 1)    callback(true);
            else callback(false);
        }
    });
};

/**
 * 
 * @param {string} id 
 * @param {string} pw 
 * @param {function(err)} callback : err발생시 stack값 들어가고 정상 작동시 null값들어감.
 */
model.enroll = (id, pw, callback) => {
    db.query(
        {
            text : 'insert into user_data(user_id, user_pw) values($1, $2)',
            values : [id, pw]
        },(err, res) => {
            if(err){console.log(err.stack); callback(err.stack);return;}
            callback(null);
        }
    )
}

module.exports = model;