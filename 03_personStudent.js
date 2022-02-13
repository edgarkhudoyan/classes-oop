class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  get age() {
    return this._age;
  }

  set firstName(value) {
    if (typeof value === 'string') {
      this._firstName = value;
    }
    return this._firstName;
  }
  set lastName(value) {
    if (typeof value === 'string') {
      this._lastName = value;
    }
    return this._lastName;
  }
  set age(value) {
    if (typeof value === 'number') {
      this._age = value;
    }
    return this._age;
  }
  set gender(value) {
    if (typeof value === 'string') {
      this._gender = value;
    }
    return this._gender;
  }

  toString() {
    return `${this._firstName} ${this._lastName} is ${this._age} years old`;
  }
}

let user1 = new Person('Name', 'Surename', 'female', 23);

console.log(user1.toString());

class Student extends Person {
  constructor(year, fee, program, grade) {
    super();
    this.year = year;
    this.fee = fee;
    this.program = [{ programName: program, grade: grade }];
  }
  passExam(programName, grade) {
    if (this.program[0].grade > 50) {
      this.isAllPassed();
      return `All exams are successfully passed`;
    }
  }
  isAllPassed() {
    this.year++;
  }
}

let student1 = new Student(10, 500, 'math', 60);
console.log(student1);
console.log(student1.passExam());
console.log(student1);
