const express = require('express')
const router = express.Router()
const sampleController = require('../controllers/sample.controller')

/* GET programming languages. */
router.get('/', sampleController.get)

/* POST programming language */
router.post('/', sampleController.create)

/* PUT programming language */
router.put('/:id', sampleController.update)

/* DELETE programming language */
router.delete('/:id', sampleController.remove)

module.exports = router
