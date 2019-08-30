#!/usr/bin/env node
const gcd = require("../games/gcd");
const game = require("..");

const name = game.startGame(gcd.rules);

game.asker(name, gcd);
game.endGame(name);