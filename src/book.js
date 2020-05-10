function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name, 
    age: age, 
    pronouns: pronouns,
  };
  return mainCharacter
}

function saveReview(review, reviews) {
  reviews.includes(review) ? reviews : reviews.push(review);
}

function calculatePageCount(title) {
  return title.length*20;
}
 
function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title, 
    mainCharacter: mainCharacter,
    genre: genre,
  };  
  book.pageCount = calculatePageCount(title);
  return book;
}

function editBook(book) {   
  return book.pageCount = book.pageCount*.75;
}


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook,
}

// //  #1
// //  npm test test/book-test.js


