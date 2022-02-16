/* Create an Author class and a Book class.
Author should have:
fields
name
email
gender
methods
getters for fields
toString()
Book should have:
fields
title
author(Author)
price
quantity
methods
getters for fields
setters for fields
getProfit() - which calculates the profit from the book based on the price and quantity.
toString() */

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get gender() {
    return this._gender;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
    return this._name;
  }

  toString() {
    if (this.gender === 'male') {
      return `Mr. ${this.name}`;
    } else if (this.gender === 'female') {
      return `Ms. ${this.name}`;
    } else {
      return `${this.name}`;
    }
  }
}

class Book {
  constructor(title, price, quantity) {
    this._title = title;
    this._price = price;
    this._quantity = quantity;
  }
  get title() {
    return this._title;
  }
  get price() {
    return this._price;
  }
  get quantity() {
    return this._quantity;
  }

  set title(value) {
    if (typeof value === 'string') {
      this._title = value;
    }
    return this._title;
  }

  toString() {
    return `${this.title} has been writen by ${this.name}, it costs ${this.price}$, and there are ${this.quantity} left in stock`;
  }
  getProfit() {
    if (this.quantity === 0) {
      return `Profit is 0 $`;
    } else if (this.quantity > 0) {
      return `Profit is ${this.quantity * this.price}$`;
    }
  }
}

let author1 = new Author('J. K. Rowling', 'abc@gmail.com', 'female');

console.log(author1.gender);
console.log(author1.name);
console.log(author1.toString());

let book1 = new Book('Harry Potter', 5, 100);

console.log(book1.title);
console.log(book1.price);
console.log(book1.quantity);
console.log(book1.toString());
console.log(book1.getProfit());
