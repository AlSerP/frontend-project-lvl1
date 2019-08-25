#!/usr/bin/env node
const even = require("../even");
const game = require("..");
const logic = require("../game");

const name = game.startGame(even.rules);

logic.asker(name, even);
game.endGame(name);