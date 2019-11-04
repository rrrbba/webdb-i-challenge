const express = require('express');

// const db = require('./data/dbConfig.js');

const AccountRouter = require('./account-router');
const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter);

// server.get('/', (req, res) => {
//     res.send('<h1>TESTER</h1>')
// })


//figure out why normal / doesn't work
// server.get('/api/accountss', (req, res) => {
//     db('Accounts')
//     .then(accounts => {
//         res.status(200).json(accounts)
//     })
//     .catch(err => {
//         res.status(500).json({ error: 'FAILED'})
//     })
// })

module.exports = server;