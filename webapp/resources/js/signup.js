var util = {}


function signUp(){
    var id = $('#user_id').val();
    var pw = $('#user_password').val();
    util.idCheck(id, valid => {
        if(valid){
            $.ajax({
                type: "POST",
                url: '/signup/enroll',
                data: {id : id, pw: pw},
                success: data => {
                    if(data.valid){
                        location.replace('/login');
                    }else{
                        alert('오류발생');
                    }
                },
                dataType: 'json'
              });
        }else{
            alert('유효한 아이디가 아닙니다.');
        }
    });
}


/**
 * 회원가입에 사용할 아이디가 사용가능할지 판단해준다.
 * @param {string} id : 회원가입으로 사용할 아이디
 * @param {function(valid)} callback : 해당아이디가 유효한지 값을 돌려받을 callback(유효할 경우 true받음)
 */
util.idCheck = (id, callback) => {
    $.ajax({
        type: "POST",
        url: '/signup/id-check',
        data: {id : id},
        success: data => {
            console.log(data);
            callback(data.valid);
        },
        dataType: 'json'
      });
}