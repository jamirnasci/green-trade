const dbconn = require('./MySQL')
const util = require('util')

const query = util.promisify(dbconn.connection.query).bind(dbconn.connection)

async function cadastrarPlanta(nome, idade, condicao, tamanho, tipo, usuarios_id, descricao, imagem){
    try {
        await query(`INSERT INTO plantas(nome, idade, condicao, tamanho, tipo, usuarios_id, descricao, imagem) VALUES(?,?,?,?,?,?,?,?)`,
            [nome, idade, condicao, tamanho, tipo, usuarios_id, descricao, imagem]
        )
        return true
    } catch (error) {
        throw error
    }
}
async function getAllPlantas(id){
    try {
        let sql = `
        SELECT
	        p.nome AS planta_nome,
	        p.id AS planta_id,
            p.condicao,
            p.descricao,
            u.nome as usuario_nome,
            imagem
        FROM plantas p INNER JOIN usuarios u WHERE u.id = p.usuarios_id AND p.usuarios_id <> ?
        `
        let data = await query(sql, [id])
        return data
    } catch (error) {
        throw error
    }
}

async function getDetalhesById(id){
    try {
        let data = await query('SELECT * FROM plantas p INNER JOIN usuarios u ON p.usuarios_id = u.id WHERE u.id = ?', [id])
        return data[0]
    } catch (error) {
        throw error
    }
}

async function getMinhasPlantas(id){
    try {
        let data = await query("SELECT * FROM plantas WHERE usuarios_id = ?", [id])
        return data
    } catch (error) {
        throw error
    }
}

async function removerPlanta(id){
    try {
        await query("DELETE FROM plantas WHERE id = ?", [id])
        return true
    } catch (error) {
        throw error
    }
}

module.exports = {
    cadastrarPlanta,
    getAllPlantas,
    getDetalhesById,
    getMinhasPlantas,
    removerPlanta
}