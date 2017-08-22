/* This is an example of prototype from MDN */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

// constructor
// 'base class'
const Person = function (name = '') {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    return `Hello my name is ${this.name}`;
  }
  return '';
};

// constructor
const Employee = function (name = '', title = '') {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.greet = function () {
  if (this.canTalk) {
    return `Hello my name is ${this.name} I'm the ${this.title}`;
  }
  return '';
};

// constructor
const Customer = function (name = '') {
  Person.call(this, name);
};
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

// constructor
const Mime = function (name = '') {
  Person.call(this, name);
  this.canTalk = false;
};
Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;


const joan = new Employee('Peter', 'manager');
const bob = new Customer('Bob');
const jane = new Mime('Jane');

// ============
// --- TEST ---
// ============

console.log('Person.prototype: ', Person.prototype);

console.log('Employee.constructor: ', Employee.constructor);
console.log('Employee.prototype.constructor: ', Employee.prototype.constructor);

console.log('Customer.constructor: ', Customer.constructor);
console.log('Customer.prototype.constructor: ', Customer.prototype.constructor);

console.log('Mime.constructor: ', Mime.constructor);
console.log('Mime.prototype.constructor: ', Mime.prototype.constructor);

console.log('joan: ', joan);
console.log('bob: ', bob);
console.log('jane ', jane);

// ---------------------------------------
console.log('joan greet: ', joan.greet());
console.log('Bob greet: ', bob.greet());
console.log('Jane greet: ', jane.greet());

console.log('get prototype of joan: ', Object.getPrototypeOf(joan));
