const utils = require('./utils');

function iplWinner(team1, team2) {
  const numbersToWin = 2;
  let team1Wins = 0;
  let team2Wins = 0;

  while (team1Wins < numbersToWin && team2Wins < numbersToWin) {
    const winner = utils.getWinner(team1, team2);
    if (winner === team1) {
      team1Wins++;
    } else if (winner === team2) {
      team2Wins++;
    }
  }

  return team1Wins > team2Wins ? team1 : team2;
}

module.exports = {
  iplWinner,
};
