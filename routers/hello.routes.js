import express from "express";
import * as helloController from '../controllers/hello.controllers'

const router = express.Router()

router.get('/hello', helloController.hello)

export default router