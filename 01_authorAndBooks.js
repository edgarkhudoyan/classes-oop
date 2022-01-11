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

let author1 = new Author('J. K. Rowling', 'abc@gmail.com', 'female');
