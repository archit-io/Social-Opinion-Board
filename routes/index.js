const express = require('express')
const router = express.Router()

//@desc Login/landing page
//@route GET /
router.get('/', (req,res) => {
    res.render('Login')
})

//@desc Dashboard
//@route GET /dashboard
router.get('/dashboard', (req,res) => {
    res.render('Dashboard')
})

module.exports = router