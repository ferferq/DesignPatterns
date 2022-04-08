function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
//Para que ele tenha seja como um "classe"
Person.prototype.constructor = Person;

const person1 = new Person('luiz', 'martins', 30);
console.log(person1.fullName());

//Herdando para uam outra função
function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'OIE';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person2 = new SubPerson('rodrigo', 'martins', 30);

console.log(person2);
console.log(person2.fullName());
