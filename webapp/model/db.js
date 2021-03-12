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
obj.client = client;

/**
 * 
 * @param {object} query : query.text, query.values 
 * @param {*} callback 
 */
obj.query = (query, callback) => {
    client.query(query, (err, res)=>{
        if(err) callback(err, null);
        else{
            client.query('commit', (e, r)=>{
                if(e) callback(e, null);
                else callback(null, res);
            });
        }
    })
}
module.exports = obj;


