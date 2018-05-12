const express = require('express')
const router = express.Router()
const { celebrate } = require('celebrate')
const requestValidation = require('./../utils/requestValidation')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})
router.post('/signin', celebrate(requestValidation.userSignin, {
  abortEarly: false, // abort after the last validation error
  allowUnknown: true, // allow unknown keys that will be ignored
  stripUnknown: true // remove unknown keys from the validated data
}), (req, res, next) => {
  res.send('respond with a resource')
})

module.exports = router
