#!/usr/bin/env node
const progression = require("../progression");
const game = require("..");
const logic = require("../game");

const name = game.startGame(progression.rules);

logic.asker(name, progression);
game.endGame(name);