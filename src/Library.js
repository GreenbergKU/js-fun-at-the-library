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
  var x, shelfGenres = [
    library.shelves.fantasy,
    library.shelves.nonFiction, 
    library.shelves.fiction,
  ];
  for (var i = 0; i < shelfGenres.length; i++) {
    shelfGenres[i].splice(x, (x = shelfGenres[i].findIndex(function(book) {  
        return book.title === title
    })) !== -1 ? 1 : 0)  
  };
  return x !== -1 ? 
    `You have now checked out ${title} from the ${library.name}`: 
    `Sorry, there are currently no copies of ${title} available at the ${library.  name}`
} 

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook,
};



