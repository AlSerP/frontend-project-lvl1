#!/usr/bin/env node
const prime = require("../prime");
const game = require("..");
const logic = require("../game");

const name = game.startGame(prime.rules);

logic.asker(name, prime);
game.endGame(name);