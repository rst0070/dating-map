$('.input_box Button').click(()=>{
    var data = {
        title : $('#title').val(),
        start_date : $('#start-date').val(),
        end_date : $('#end-date').val(),
        description : $('#description').val()
    }

    if(checkDate(data)){
        $.ajax({
            type: "POST",
            url: '/add_travle',
            data: data,
            success: data => {
                console.log(data);
                callback(data.valid);
            },
            dataType: 'json'
        })
    }
});

var functions = {};

functions.checkDate = (data) => {
    if(title.length < 1) return false;
    return true;
}