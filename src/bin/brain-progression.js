#!/usr/bin/env node
const progression = require("../games/progression");
const game = require("..");

const name = game.startGame(progression.rules);

const result = game.asker(name, calc);
game.endGame(name, result);