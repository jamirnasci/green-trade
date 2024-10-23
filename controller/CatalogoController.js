const plantaModel = require('../model/PlantaModel')
const sharp = require('sharp');

exports.catalogo = async (req, res) => {
    let plantas = await plantaModel.getAllPlantas(req.userId)
    
    res.render('catalogo', { plantas: plantas })
}