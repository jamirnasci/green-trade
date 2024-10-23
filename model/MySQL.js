const mysql = require('mysql2')

const connection = mysql.createConnection({
    user:'root',
    password:'12345',
    database:'greentrade',
    host:'localhost'
})

connection.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log('Mysql connection succesful !')
    }
})

module.exports = {
    connection
}