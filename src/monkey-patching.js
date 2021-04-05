const assert = require('assert');
const utils = require('./utils');
const { iplWinner } = require('./iplWinner');

const originalWinner = utils.getWinner;

utils.getWinner = (t1, t2) => t1;

const team1 = 'Mumbai Indians';
const team2 = 'Chennai Superking';

assert.strictEqual(iplWinner(team1, team2), 'Mumbai Indians');
// console.log(iplWinner(team1, team2));

utils.getWinner = originalWinner;
