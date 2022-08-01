const express = require('express');
const router = express.Router();
const Notes  = require('./modelschema')
const {getAll,postnotes,getunique,deleteunique,updatenotes} = require('./controllers/notes')
//GET METHOD
router.get('/',getAll)
//POST METHOD
router.post('/',postnotes)
//GET UNIQUE DATA
router.get('/:id' ,getunique)
//DELETE UNIQUE DATA
router.delete('/:id',deleteunique)
//PUT METHOD
router.put('/:id',updatenotes)
module.exports = router; 