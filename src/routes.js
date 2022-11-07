const {
  addBook, showBook, getBookbyId, updateBookbyId,
} = require('./handler');

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
  // Get specified book based on bookId
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookbyId,
  },
  // Put method
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookbyId,
  },
];

module.exports = routes;
