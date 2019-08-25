#!/usr/bin/env node
const ask = require("../even");

ask.startGame();
const user = require("..");
ask.welcome(user.name);

ask.asker(user.name);
ask.endGame(user.name);