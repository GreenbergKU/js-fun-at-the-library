function createLibrary(name) {
  var library = {
    name: name, 
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
  return library
}

function addBook(library, book) {
  var bookGenre = book.genre;
  library.shelves[`${bookGenre}`].push(book);
    return library
}

function checkoutBook(library, title) {
  var index, shelfGenres = [
      library.shelves.fantasy,
      library.shelves.nonFiction, 
      library.shelves.fiction
  ];
  var checkOutYes = `You have now checked out ${title} from the ${library.name}`;
  var checkOutNo = `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  for (var i = 0; i < shelfGenres.length; i++) {
      index = shelfGenres[i].findIndex(function(book) {
          return book.title === title
      }); 
      index !== -1 ? shelfGenres[i].splice(index, 1) : shelfGenres[i];
  };
  return index !== -1 ? checkOutYes : checkOutNo;
}

//////// CONSOLE.LOG("checkoutBook(library, title)") /////////////
// console.log(shelfGenres);
// console.log(library.shelves)
// console.log("a1:", book.genre, "a2:", typeof(book.Genre), 'a3:', library.shelves[`${bookGenre}`])
// console.log("A", library.shelves);
//console.log("1:", shelfGenres[2])
//console.log("2:", shelfGenres[i]);   
//console.log("3:", shelfGenres)
//console.log("B:", library.shelves)
  
  //***************************************************//
    ////  UNSHELFBOOK() from SHELF.js //// (b/c seemed so similar)
    //****************************************************//
    // function unshelfBook(title, shelf) {
    //   shelf.splice(shelf.findIndex(function(book) {
    //     return book.title === title
    //   }), 1);
    // }
    //**************************************************//

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook,
};
// //  #3
// //  npm test test/library-test.js


