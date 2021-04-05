const Todos = require('./todos.js');
const axios = require('axios');

jest.mock('axios');

test('mock todos api', () => {
  const data = [
    {
      userId: 5,
      id: 99,
      title: 'neque voluptates ratione',
      completed: false,
    },
  ];
  const response = { data };
  axios.get.mockResolvedValue(data);

  return Todos.all().then((result) => {
    expect(result).toEqual(data);
  });
});
