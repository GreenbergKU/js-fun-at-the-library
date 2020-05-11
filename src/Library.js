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
  var index;
  for (var i = 0; i < shelfGenres.length; i++) {
    index = shelfGenres[i].findIndex(function(book) {
      return book.title === title
    }),
    index !== -1 ? shelfGenres[i].splice(index, 1) : shelfGenres[i];
  };
  return index !== -1 ? 
    `You have now checked out ${title} from the ${library.name}`: 
    `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook,
};

