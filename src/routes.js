const addBook = require('./handler');

const routes = [
  // Post method
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
];

module.exports = routes;
