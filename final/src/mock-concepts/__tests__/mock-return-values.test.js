test('mock return value', () => {
  const myMock = jest.fn();

  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('satyam')
    .mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock(), myMock());
  expect(myMock).toHaveBeenCalledTimes(5);
});
