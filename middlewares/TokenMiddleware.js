const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

exports.verifyToken = (req, res, next)=>{
    const token = req.cookies['token']
    if(!token){
        res.redirect('/login')
    }

    jwt.verify(token, SECRET_KEY, {}, (err, decoded)=>{
        if(err){
            res.redirect('/login')
        }
        req.userId = decoded.id
        next()
    })
}