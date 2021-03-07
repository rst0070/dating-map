var util = {}

$('#user_id').on('keydown', ()=>{
    if(util.idCheck($('#user_id').val())){
        alert('valid');
    }else{

    }
});

function signUp(){
    var id = $('#user_id').val();
    var pw = $('#user_password').val();
}



util.idCheck = id => {
    $.ajax({
        type: "POST",
        url: '/signup/id-check',
        data: {id : id},
        success: data => {
            if(data.valid){

            }else{

            }
        },
        dataType: 'json'
      });
}