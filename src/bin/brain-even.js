#!/usr/bin/env node
const even = require("../games/even");
const game = require("..");

const name = game.startGame(even.rules);

const result = game.asker(name, even);
game.endGame(name, result);