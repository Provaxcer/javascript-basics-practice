const express = require('express')
const {create, getdata, updateData, deleteData } = require('../controller/create')
const router = express.Router()

router.get('/', getdata)
router.post('/', create)
router.put('/:id', updateData)
router.delete('/:id', deleteData)

module.exports = router