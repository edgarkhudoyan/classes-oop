class Library {
  constructor(books, readers) {
    this.books = [LibraryBook];
    this.readers = [Reader.firstName];
  }
  doHaveBook(book) {
    if (this.books.length > 0) return true;
    return false;
  }
  addBook(newBook) {
    if (this.books.includes(newBook)) {
      newBook.quantity++;
    }
    this.books.push(newBook);
  }
  readerId() {
    if (Reader.readerId === true) return Reader.readerId;
    return `No Readers`;
  }
}

class Reader {
  constructor(firstName, lastName, readerId, books = [ReaderBook]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.readerId = readerId;
    this.books = books;
  }
  getInfo() {
    return `Reader - ${this.firstName} ${this.lastName}, ID - ${this.readerId}`;
  }
  setInfo(name, id) {
    this.firstName = name;
    this.readerId = id;
  }
  toString() {
    return `The reader is ${this.firstName} ${this.lastName}`;
  }
  borrowBook(book, library) {
    if (typeof book !== null) {
      this.books.push(book);
    }
    return `Invalid type of book`;
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getinfo() {
    return `Title - ${this.title}, Author - ${this.author}`;
  }
  toString() {
    return `${this.title} has been writen by ${this.author}`;
  }
  isTheSameBook(book) {
    if (book.title === tihis.title && book.author === this.author) return true;
    return false;
  }
}

class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author);
    this.bookId = bookId;
  }
  getInfo() {
    return `Title - ${this.title}, Author - ${this.author}, ID - ${this.bookId}`;
  }
  toString() {
    return `${this.title} has been writen by ${this.author}, ID ${this.bookId}`;
  }
}

class LibraryBook extends Book {
  constructor(title, author, bookId, quantity) {
    super(title, author);
    this.bookId = bookId;
    this.quantity = quantity;
  }
  getInfo() {
    return `Title - ${this.title}, Author - ${this.author}, ID - ${this.bookId}, Quantity - ${this.quantity}`;
  }
  setInfo(title, author, bookId, quantity) {
    this.title = title;
    this.author = author;
    this.bookId = bookId;
    this.quantity = quantity;
  }
  toString() {
    return `${this.title} has been written by ${this.author}, availaible quantity ${this.quantity}`;
  }
  increaseQuantityBy(amount) {
    this.quantity + amount;
    return this.quantity;
  }
  decreaseQuantityBy(amount) {
    this.quantity - amount;
    return this.quantity;
  }
}
class ReaderBook extends Book {
  constructor(title, author, bookId, expirationDate, isReturned) {
    super(title, author);
    this.bookId = bookId;
  }
  getInfo() {
    return `Title - ${this.title}, Author - ${this.author}, ID - ${this.bookId}, Expiration Date - ${this.expirationDate}, Has it been returned? - ${this.isReturned}`;
  }
  setInfo(expire, returned) {
    this.expirationDate = expire;
    this.isReturned = returned;
  }
  toString() {
    return `This book will expire in ${this.expirationDate}`;
  }
}
