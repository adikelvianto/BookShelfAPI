const { addBook, showBook } = require('./handler');

const routes = [
  // Post method
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  // Get method
  {
    method: 'GET',
    path: '/books',
    handler: showBook,
  },
];

module.exports = routes;
