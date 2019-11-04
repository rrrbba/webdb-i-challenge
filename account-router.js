const express = require('express');

const knex = require('./data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    knex
    .select('*')
    .from('Accounts')
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        res.status(500).json({ error: 'GET FAILED'})
    })
});

router.get('/:id', (req, res) => {
    knex
    .select('*')
    .from('Accounts')
    .where('id', '=', req.params.id)
    .then(account => {
        res.status(200).json(account)
    })
    .catch(err => {
        res.status(500).json({ error: 'GET BY ID FAILED'})
    })
});

router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('Accounts')
    .then(account => {
        res.status(200).json(account)
    })
    .catch(err => {
        res.status(500).json({ error: 'FAILED TO POST'})
    })
});


router.put('/:id', (req, res) => {
    const changes = req.body;

    knex('Accounts')
    .where({ id: req.params.id})
    .update(changes)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: 'FAILED TO UPDATE'})
    })
});


router.delete('/:id', (req, res) => {
    knex('Accounts')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: 'FAILED TO DELETE'})
    })
});

module.exports = router;