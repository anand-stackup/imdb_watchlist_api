const express = require("express");
const route = express.Router();
const controller = require("../controller/controller")

route.get('/api/watchlist', controller.find);
route.post('/api/watchlist', controller.create);
route.delete('/api/watchlist/:id', controller.delete);

module.exports = route;
