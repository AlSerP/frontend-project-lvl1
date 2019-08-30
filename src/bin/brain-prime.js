#!/usr/bin/env node
const prime = require("../games/prime");
const game = require("..");

const name = game.startGame(prime.rules);

const result = game.asker(name, calc);
game.endGame(name, result);;