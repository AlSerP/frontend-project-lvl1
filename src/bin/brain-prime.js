#!/usr/bin/env node
const prime = require("../games/prime");
const game = require("..");

const name = game.startGame(prime.rules);

game.asker(name, prime);
game.endGame(name);