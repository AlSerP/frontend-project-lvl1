#!/usr/bin/env node
const progression = require("../games/progression");
const game = require("..");

const name = game.startGame(progression.rules);

const result = game.asker(name, progression);
game.endGame(name, result);