const { Client } = require('pg');
var client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'wonbin',
    database: 'dmap',
});

var obj = {};

/**
 * db와 연결이 성공하면 callback을 수행한다.
 * @param {*} callback 
 */
obj.connect = (callback) => {
    client.connect((err)=>{
        if(err){
            console.log(err.stack);
        } else{
            console.log('db connected!');
            callback();
        } 
    });
}

obj.connect(()=>{
    client.query({
        text: 'select * from user_data'
    },(err, res)=>{
        console.log(res.rows.length);
        console.log(res);
    });
})