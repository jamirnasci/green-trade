const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.index = (req, res)=>{
    res.render('index')
}