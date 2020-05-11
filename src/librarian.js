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
    if (fantasyShelf[0].title === title) {
      fantasyShelf.pop(); 
      return `Yes, we have ${title}`
    };
    return `Sorry, we do not have ${title}`
  }
  
  calculateLateFee(daysPastDue) {
    var pastDue = daysPastDue * .25;
    var pastDueRounded = Math.ceil(pastDue);
    return pastDueRounded;
  };
}

module.exports = Librarian;



