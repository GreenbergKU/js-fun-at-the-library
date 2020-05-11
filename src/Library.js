function createLibrary(name) {
  var library = {
    name: name, 
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library
}

function addBook(library, book) {
  var bookGenre = book.genre;
  library.shelves[`${bookGenre}`].push(book);
    return library
}

function checkoutBook(library, title) {
  var shelfGenres = [
    library.shelves.fantasy,
    library.shelves.nonFiction, 
    library.shelves.fiction,
  ];
  var bookIndex;
  for (var i = 0; i < shelfGenres.length; i++) {
    bookIndex = shelfGenres[i].findIndex(function(book) {
      return book.title === title
    }),
    bookIndex !== -1 ? shelfGenres[i].splice(index, 1) : shelfGenres[i];
  };
  return bookIndex !== -1 ? 
    `You have now checked out ${title} from the ${library.name}`: 
    `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook,
};

