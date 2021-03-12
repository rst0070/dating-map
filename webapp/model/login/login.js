const db = require('../db.js');
var model = {};


/**
 * id와 pw가 맞는지 확인.
 * @param {*} id 사용자 id
 * @param {*} pw 사용자 pw
 * @param {function(err, valid)} callback valid는 boolean값으로 사용자 정보의 유효성(id와 pw가 맞는지)을 표현.
 */
model.checkIdPw = (id, pw, callback)=>{
    db.query(
        {
            text: 'select user_id from user_data where user_id = $1 and user_pw = $2',
            values : [id, pw]
        },
        (err, res)=>{
            if(err){ console.log(err);callback(err, false);}
            else{
                if(res.rows.length == 1) callback(null, true);
                else{
                    console.log(__dirname+'/login.js 예외사항 발생. 사용자의 아이디가 유일하지 않음.');
                }
            }
        }
    );
}

module.exports = model;