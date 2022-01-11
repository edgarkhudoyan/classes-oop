class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  getInfo() {
    return `${this.firstName} ${this.lastName} is ${this.gender} and ${this.age} years old`;
  }
  setInfo(first, last, gender, age) {
    this.firstName = first;
    this.lastName = last;
    this.gender = gender;
    this.age = age;
  }
  toString() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`;
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
