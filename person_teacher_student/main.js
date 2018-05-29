var input = document.querySelector('input');
var btn = document.querySelector('button');
var output = document.querySelector('code');

btn.onclick = function() {
  var code = input.value;
  output.textContent = eval(code);
}

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  console.log('Hi I\'m ' + this.name.first + '.');
};

Person.prototype.bio = function() {
  var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  var pronoun;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender == 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender == 'f' || this.gender === 'F') {
    pronoun = 'She Likes';
  } else {
    pronoun = 'They like ';
  }

  string += pronoun;

  if (this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if (this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    for (var i = 0; i < this.interests.length; i++) {
      if (i === this.interests.length -1) {
        string += 'and' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }

  return string;
}

Person.prototype.farewell = function(argument){
  return this.name.first + ' has left the building. Bye for now!';
};

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first ,last, age, gender, interests);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender == 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender == 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  var result = 'Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.';

  return result;
}

var teacher_john = new Teacher('John', 'Doe', 31, 'male', ['football', 'cookery'], 'mathematics');

function Student(first, last, age, gender, interests, standard) {
  Person.call(this, first, last, age, gender, interests);

  this.standard = standard;
}

Student.prototype = Object.create(Person.prototype);

const lotsofstudents = new Student('Ajay', 'Rawat', 21, 'asd', ['Walking', 'Singing'], 'Graduation');