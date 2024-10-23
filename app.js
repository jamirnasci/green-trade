const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const indexController = require('./controller/IndexController')
const tokenMiddleware = require('./middlewares/TokenMiddleware')
const catalogoController = require('./controller/CatalogoController')
const plantasController = require('./controller/PlantasController')
const usuarioController = require('./controller/UsuarioController')
const loginController = require('./controller/LoginController')
const path = require('path')
const app = express()
require('dotenv').config()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const PORT = process.env.PORT

app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '\\public'))
app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs')

app.get('/', indexController.index) //ok
app.get('/login', loginController.login) //ok
app.post('/login', loginController.loginAuth) //ok
app.get('/catalogo', tokenMiddleware.verifyToken, catalogoController.catalogo) //ok
app.post('/catalogo', tokenMiddleware.verifyToken, catalogoController.catalogoFilter) //ok
app.get('/detalhesPlanta/:id', tokenMiddleware.verifyToken, plantasController.detalhesPlanta) //ok -
app.get('/minhasPlantas', tokenMiddleware.verifyToken, plantasController.minhasPlantas) 
app.post('/removerPlanta',tokenMiddleware.verifyToken,  plantasController.removerPlanta)
app.post('/cadastrarUsuario', usuarioController.cadastrarUsuarioBanco) //ok
app.get('/cadastrarUsuario', usuarioController.cadastrarUsuario) //ok
app.get('/cadastrarPlanta', tokenMiddleware.verifyToken, plantasController.cadastrarPlanta) //ok
app.post('/cadastrarPlanta', tokenMiddleware.verifyToken, upload.single('imagem'), plantasController.cadastrarPlantaBanco) //ok
app.get('/logout', usuarioController.logout) //ok -

app.listen(PORT, _ => console.log(`Server running on ${PORT}`))