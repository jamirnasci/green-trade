const usuarioModel = require('../model/UsuarioModel')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    res.render('login')
}

function generateToken(user){
    return jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn:'1h'})
}

exports.loginAuth = async (req, res) => {
    let { email, senha } = req.body
    let result = await usuarioModel.login(email, senha)

    if (result) {
        let token = generateToken({ id: result[0].id })
        res.cookie('token', token, { httpOnly: true, secure: false })
        res.status(200).json({ message: 'Login realizado com sucesso' })
    } else {
        res.status(400).json({ message: 'Falha no login, verifique as informações' })
    }
}