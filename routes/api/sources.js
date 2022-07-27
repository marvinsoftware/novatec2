const router = require('express').Router();

const { body } = require('express-validator');
const { Source } = require('../../db');

router.get('/', async (req, res) => {
    const sources = await Source.findAll();
    res.json(sources);
});


router.post('/', async (req, res) => {
    const source = await Source.create(req.body);
    res.json(source);
});


router.put('/:sourceId', async (req, res) => {
    const source = await Source.update(req.body, {
        where : { id: req.params.sourceId}   
       });
    res.json( {success: 'Se ha modificado'} );
});


module.exports = router;