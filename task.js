function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  
}
let Oleg = new Student("Oleg", "man", 23);
let Anton = new Student("Антон", "man", 40);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    Student.prototype.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}
 
Student.prototype.addMarks = function(...mark) {
  if (this.marks === undefined) {
    Student.prototype.marks = [];
    this.marks.push(...mark);
  } else {
    this.marks.push(...mark);
  }
}
 
Student.prototype.getAverage = function() {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;;
}
 
Student.prototype.exclude = function(reason) {
  this.reason = reason;
  delete this.subject;
  delete this.marks;
}