import express from "express";
import * as categoriaController from '../controllers/categoria.controllers.js'

const router = express.Router()

router.get('/categorias', categoriaController.getCategorias)
router.post('/categorias', categoriaController.criarCategoria)
router.delete('/categorias/:categoriaId', categoriaController.deletarCategoria)

export default router