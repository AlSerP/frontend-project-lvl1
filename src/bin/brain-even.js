#!/usr/bin/env node
const even = require("../games/even");
const game = require("..");

const name = game.startGame(even.rules);

const result = game.asker(name, calc);
game.endGame(name, result);