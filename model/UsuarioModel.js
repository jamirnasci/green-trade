const dbconn = require('./MySQL')
const util = require('util')

const query = util.promisify(dbconn.connection.query).bind(dbconn.connection)

async function login(email, password){
    try{
        let data = await query("SELECT id FROM usuarios WHERE email = ? AND senha = ?", [email, password])
        if(data[0] == null){
            return false
        }
        return data
    }catch(err){
        throw err
    }
}
async function cadastrarUsuario(nome, idade, cpf, cep, email, senha){
    try {
        await query("INSERT INTO usuarios(nome, idade, cpf, cep, email, senha) VALUES(?,?,?,?,?,?)", [nome, idade, cpf, cep, email, senha])
        return true
    } catch (error) {
        throw error
    }
}
module.exports = {
    login,
    cadastrarUsuario
}