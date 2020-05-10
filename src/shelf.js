function shelfBook(book, shelf) {
  return shelf.length < 3 ? shelf.unshift(book) : book;
}  

function unshelfBook(title, shelf) {
  shelf.splice(shelf.findIndex(function(book) {
    return book.title === title
  }), 1);
}

function listTitles(shelf) {
  var titleList = [];
  for (var i = 0; i < shelf.length; i++) {
    titleList.push(shelf[i].title);
  }
  return titleList.join(', ');
}  
 
function searchShelf(shelf, title) {
  for (i = 0; i < shelf.length; i++) {
    var bookFound = (shelf[i].title === title);
  } return bookFound
}

  module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf,
};


// //  #2
// //  test test/shelf-test.js
