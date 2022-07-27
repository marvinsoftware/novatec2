const router = require('express').Router();

const { body } = require('express-validator');
const { State } = require('../../db');

router.get('/', async (req, res) => {
    const states = await State.findAll();
    res.json(states);
});


router.get('/:stateId', async (req, res) => {
    const states = await State.findAll();
    where : { id: req.params.stateId} 
    res.json(states);
});


router.post('/', async (req, res) => {
    const state = await State.create(req.body);
    res.json(state);
});


router.put('/:stateId', async (req, res) => {
    const state = await State.update(req.body, {
        where : { id: req.params.stateId}   
       });
    res.json( {success: 'Se ha modificado'} );
});


module.exports = router;