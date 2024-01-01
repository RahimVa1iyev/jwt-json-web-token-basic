const express = require('express')
const router = express.Router()
const {dashboard,login} = require('../controllers/main')
const authenticationMiddleware = require('../middleware/auth')


router.post('/login',login)
router.get('/dashboard',authenticationMiddleware,dashboard)

module.exports = router