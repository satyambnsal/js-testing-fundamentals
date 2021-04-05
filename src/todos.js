const axios = require('axios');

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
class Todos {
  static all() {
    return axios.get(`${API_BASE_URL}/todos`);
  }
}

module.exports = Todos;
