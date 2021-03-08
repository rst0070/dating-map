const db = 'dbdbdbd';
var model = {};


/**
 * id와 pw가 맞는지 확인.
 * @param {*} id 사용자 id
 * @param {*} pw 사용자 pw
 * @param {function(valid)} callback valid는 boolean값으로 사용자 정보의 유효성(id와 pw가 맞는지)을 표현.
 */
model.checkIdPw = (id, pw, callback)=>{
    /** db processing... */
    callback(true);
}

module.exports = model;