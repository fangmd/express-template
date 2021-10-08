import express from 'express'
import { validationResult } from 'express-validator'
import { paramsValidate } from '../middleware/paramsValidate'
import { HttpResult } from '../response'
import { ParamsError } from '../utils/errors'
import { paramsGetValidate, paramsPostValidate } from '../validators/testValidator'
const router = express.Router()

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now())
//   next()
// })

router.get('/', function (req, res) {
  res.send(HttpResult.success())
})

router.get('/about', function (req, res) {
  res.send(HttpResult.success())
})

router.get('/params', paramsGetValidate, function (req, res) {
  res.send(HttpResult.success())
})

router.post('/params', paramsPostValidate, function (req, res) {
  res.send(HttpResult.success())
})

export default router
