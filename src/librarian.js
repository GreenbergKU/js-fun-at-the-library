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
    var fantasyShelf = this.library.shelves.fantasy;
    var no = `Sorry, we do not have ${title}`;
    var yes = `Yes, we have ${title}`;    
    if (fantasyShelf[0].title === title) {
      fantasyShelf.pop(); 
      return yes;
    } else {
      return no;
    }
  }
  
  calculateLateFee(daysPastDue) {
    var pastDue = daysPastDue * .25;
    var pastDueRounded = Math.ceil(pastDue);
    return pastDueRounded;
  }

}

module.exports = Librarian;

// // #4
// // npm test test/Librarian-test.js


