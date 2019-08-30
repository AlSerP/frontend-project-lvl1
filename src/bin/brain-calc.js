#!/usr/bin/env node
const calc = require("../games/calc");
const game = require("..");

const name = game.startGame(calc.rules);

const result = game.asker(name, calc);
game.endGame(name, result);