const utils = require('../utils');
const { iplWinner } = require('../ipl-winner');

test('returns IPL winner', () => {
  const originalWinner = utils.getWinner;
  utils.getWinner = jest.fn((t1, t2) => t1);

  const team1 = 'Mumbai Indians';
  const team2 = 'Chennai Superking';
  const winner = iplWinner(team1, team2);
  expect(winner).toBe(team1);
  expect(utils.getWinner.mock.calls).toEqual([
    [team1, team2],
    [team1, team2],
  ]);

  expect(utils.getWinner).toHaveBeenCalledTimes(2);

  utils.getWinner = originalWinner;
});
