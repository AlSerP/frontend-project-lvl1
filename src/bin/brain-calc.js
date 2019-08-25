#!/usr/bin/env node
const calc = require("../calc");
const game = require("..");
const logic = require("../game");

const name = game.startGame(calc.rules);

logic.asker(name, calc);
game.endGame(name);