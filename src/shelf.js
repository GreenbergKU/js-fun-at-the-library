function shelfBook(book, shelf) {
  return shelf.length < 3 ? shelf.unshift(book) : book;
}  
  //add books to the shelf matching it's genre 


// ARROW FUNCTION:
// function unshelfBook(title, shelf) {
// shelf.splice(shelf.findIndex(book => book.title === title), 1);
// }

// ARROW DISECTED:;
function unshelfBook(title, shelf) {
  shelf.splice(shelf.findIndex(function(book) {
    return book.title === title
  }), 1);
}
//see ARROW FUNCTION NOTES for more details
//turing/1bmod/project notes/arrrow_function_notes.js
//(mdn) fruits.findIndex(fruit => fruit === "blueberries")

function listTitles(shelf) {
  return `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`
}
 
function searchShelf(shelf, book) {
  for (i = 0; i < shelf.length; i++) {
    shelf[i].title === book 
      return true;
    
  } return false;
}

  module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};


// //  #2

// //  test test/shelf-test.js

//LISTtITLES NOTES

//SEARCHsHELF NOTES