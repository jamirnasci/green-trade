const plantaModel = require('../model/PlantaModel')

exports.detalhesPlanta = async (req, res)=>{
    const id = req.params.id
    let data = await plantaModel.getDetalhesById(id)
    res.render('detalhesPlanta', {planta: data})
}
exports.removerPlanta = async (req, res)=>{
    let plantaId = req.body.id
    let result = await plantaModel.removerPlanta(plantaId)
    if(result){
        res.status(200).json({message: "Planta removida com sucesso"})
    }else{
        res.status(400).json({message: "Falha ao remover planta"})
    }
}

exports.cadastrarPlanta = (req, res)=>{
    res.render('cadastrarPlanta')
}

exports.cadastrarPlantaBanco = async (req, res)=>{
    let {nome, idade, condicao, tamanho, tipo, descricao} = req.body
    const imagem = req.file ? req.file.path : null

    console.log(nome, idade, condicao, tamanho, tipo, descricao, imagem)
    let result = await plantaModel.cadastrarPlanta(nome, idade, condicao, tamanho, tipo, req.userId, descricao, imagem)
    if(result){
        res.status(200).json({message: 'Planta registrada com sucesso'})
    }else{
        res.status(400).json({message: 'Falha ao registrar planta'})
    }
}

exports.minhasPlantas = async (req, res)=>{
    let id = req.userId
    let plantas = await plantaModel.getMinhasPlantas(id)
    res.render('minhasPlantas', {plantas: plantas})
}