class Librarian {
  constructor(name, library, morning) {
    this.name = name;
    this.library = library;
    this.morning = morning ? true:false;
  }

  greetPatron(name, morning) {
    return morning ? `Good morning, ${name}!`:`Hello, ${name}!`;
  }

  findBook(title) { 
    var fantasyShelf = this.library.shelves.fantasy;
    if (fantasyShelf[0].title === title) {
      fantasyShelf.pop(); 
      return `Yes, we have ${title}`
    };
    return `Sorry, we do not have ${title}`
  }
  
  calculateLateFee(daysPastDue) {
    return Math.ceil(daysPastDue * .25)
  };
}

module.exports = Librarian;



