const express = require('express');
const router = express.Router();
const Node = require('../models/node');

// return all nodes
router.get('/', async (req, res) => {
    try {
        const nodes = await Node.find();
        res.json(nodes);
    } catch (err) {
        res.json({ message: err });

    }
});

// return a single node
router.get('/:id', (req, res) => {
    res.json({
        message: 'Node ' + req.params.id
    });
});

//add a new node
router.post('/', async (req, res) => {
    const node = new Node({
        name: req.body.name,
        description: req.body.description,
        maintainer_email: req.body.maintainer_email,
        address: req.body.address,

    });
    try {
        const savedNode = await node.save();
        res.json(savedNode);
    } catch (err) {
        res.json({ message: err });
    }
});




module.exports = router;

