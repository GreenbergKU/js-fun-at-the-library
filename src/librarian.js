var assert = require("chai").assert;
var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;
var createLibrary = require('../src/Library.js').createLibrary;
var addBook = require('../src/Library.js').addBook;

class Librarian {
  constructor(name, library, morning) {
    this.name = name;
    this.library = library;
    this.morning = morning ? true:false;
  }

  greetPatron(name, morning){
    return morning ? `Good morning, ${name}!`:`Hello, ${name}!`;
  }

  findBook(title) {
      console.log("1:", this.library.shelves.fantasy[0].title,)
    var fantasyShelf = this.library.shelves.fantasy;
    var no = `Sorry, we do not have ${title}`;
    var yes = `Yes, we have ${title}`;    
    if (fantasyShelf[0].title === title) {
      fantasyShelf.pop();
       console.log("A:", fantasyShelf);
      return yes
    } else {
      return no
    }
  }
  
  calculateLateFee(daysPastDue) {
    var pastDue = daysPastDue * .25;
    console.log("DUE1:", daysPastDue, "DUE2:", pastDue);
    var pastDueRounded = Math.ceil(pastDue)
    console.log("DUE3:", pastDue, "DUE4:", pastDueRounded)
    return pastDueRounded
  }
}
//? checkItOut(title) {
 //this.library.shelves.fantasy[0].title == title       
        
       
  

      
      //console.log("A", fantasyShelf[0].title) 
      //console.log("B", fantasyShelf)
      // console.log("2:", this.library.shelves['fantasy'])
      // console.log("3", this.library.shelves.fantasy)
      // console.log("C", fantasyShelf, "D", fantasyShelf.pop())
      // `Sorry, we do not have ${title}`: false;
  
  //`Yes, we have ${title}`
    
      //console.log("A", this.library.shelves, "B", title);
      //console.log("C", this.library.shelves.fantasy[0].title);
    //shelf= this.library.shelves
    //= true ? `Yes, we have ${title}`:`Sorry, we do not have ${title}`
    //for (var i = 0; i < this.library.shelves.length; i++) {
      //this.library.shelves.fantasy[0].title == title 
     // console.log("1:", this.library.shelves.fantansy[i].title )
     

module.exports = Librarian;


// // #4
// // npm test test/Librarian-test.js



////// FROM SHELF.js

// function searchShelf(shelf, book) {
//   for (i = 0; i < shelf.length; i++) {
//     shelf[i].title === book 
//       return true;
    
//   } return false;
// }

/////// FROM LIBRARY.js

// function checkoutBook(library, title) {
//   var shelfGenres = [
//     library.shelves.fantasy,
//     library.shelves.nonFiction, 
//     library.shelves.fiction,
//   ];
//       //console.log("1:", shelfGenres[2])
//   var index;
//   for (var i = 0; i < shelfGenres.length; i++) {
//         //console.log("2:", shelfGenres[i]);   
//     index = shelfGenres[i].findIndex(function(book) {
//       return book.title === title
//     })
//         console.log(index);
//     index !== -1 ? shelfGenres[i].splice(index, 1) : shelfGenres[i];
//   }
//       console.log(shelfGenres);
//     return index !== -1 ? 
//     `You have now checked out ${title} from the ${library.name}` : `Sorry, there are currently no copies of ${title} available at the ${library.name}`
// }




