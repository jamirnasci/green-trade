const usuarioModel = require('../model/UsuarioModel')


exports.logout = (req, res) => {
    res.clearCookie('token')
    res.redirect('/login')
}

exports.cadastrarUsuario = (req, res)=>{
    res.render('cadastrarUsuario')   
}

exports.cadastrarUsuarioBanco = async (req, res)=>{
    let {nome, idade, cpf, cep, email, senha} = req.body
    let result = await usuarioModel.cadastrarUsuario(nome, idade, cpf, cep, email, senha)
    if(result){
        res.status(200).json({message: 'Usuário cadastrado com sucesso'})
    }else{
        res.status(400).json({message: 'Falha ao cadastrar usuário'})
    }
}