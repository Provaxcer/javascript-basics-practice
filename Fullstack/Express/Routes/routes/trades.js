const express = require('express')
const router = express.Router()

router.use(express.json())

router.post('/', function(req,res){
    const data = req.body
    res.json({
        message: 'Saved Successfully Trade Route',
        data
    })
})

router.get('/', function (req, res) {
    const data = req.body
    res.json({
        message: "Gettiing message in trade route",
        data
    })
})

module.exports = router