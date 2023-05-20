import express from "express";
import * as showController from '../controllers/show.controllers.js'

const router = express.Router()

router.post('/show', showController.criarShow)
router.post('/show/:postagemId', showController.atualizarShow)
router.get('/show', showController.getShows)
router.get('/show/:showId', showController.getShowPorId)
router.delete('/show/:showId', showController.deletarShow)

export default router
