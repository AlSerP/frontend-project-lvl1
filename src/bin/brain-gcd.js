#!/usr/bin/env node
const gcd = require("../gcd");
const game = require("..");
const logic = require("../game");

const name = game.startGame(gcd.rules);

logic.asker(name, gcd);
game.endGame(name);