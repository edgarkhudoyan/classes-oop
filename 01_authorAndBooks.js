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
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  getters() {
    return `Author is ${this.name}, ${this.email}, Gender ${this.gender}`;
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

class Book extends Author {
  constructor(title, price, quantity) {
    super(author1.name);
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
  getters() {
    return `${this.title} has been writen by ${this.name}, it costs ${this.price}$, and there are ${this.quantity} left in stock`;
  }
  getProfit() {
    if (this.quantity === '0') {
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
console.log(book1.getters());
console.log(book1.getProfit());
