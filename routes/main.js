const express = require('express')
const router = express.Router()
const {dashboard,login} = require('../controllers/main')


router.post('/login',login)
router.get('/dashboard',dashboard)

module.exports = router