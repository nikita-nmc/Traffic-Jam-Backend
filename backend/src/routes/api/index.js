import { route } from '..';
import lobby from './lobby';

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
    res.send("Hello World!");
});

router.get(lobby, function joinLobby(params) {
    res.alert("joined a lobby!")
})

module.exports = router;