import express from 'express'
import { TestController } from '../controller/TestController'
import { HttpResult } from '../response'
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

router.get('/params', paramsGetValidate, TestController.getParams)
router.post('/params', paramsPostValidate, TestController.postParams)

export default router
