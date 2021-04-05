function getWinner(team1, team2) {
  const winningNumber = Math.random();
  const winner =
    winningNumber < 1 / 3 ? team1 : winningNumber < 2 / 3 ? team2 : null;
  return winner;
}

module.exports = { getWinner };
