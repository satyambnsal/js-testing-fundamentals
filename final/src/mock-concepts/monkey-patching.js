const assert = require('assert');
const { iplWinner } = require('./ipl-winner');
const utils = require('./utils');

const originalGetWinner = utils.getWinner;
utils.getWinner = (t1, t2) => t1;

const team1 = 'Mumbai Indians';
const team2 = 'Chennai Superking';

const winner = iplWinner(team1, team2);
assert.strictEqual(winner, team1);

// console.log(winner);

utils.getWinner = originalGetWinner;
