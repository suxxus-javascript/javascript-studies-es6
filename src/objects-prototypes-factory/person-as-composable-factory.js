// From JavaScript Factory Functions with ES6+From JavaScript Factory Functions with ES6+
// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const greet = (name = '') => () => `Hello my name is ${name} `;

const ColorId = ({ id = '' }) => (o = {}) =>
  Object.assign(o, ({ getColorId: () => id }));

const Person = ({ name = '' } = {}) =>
  Object.assign(
    Object.create({
      constructor: Person,
    }), {
      getName: () => name,
      greet: greet(name),
    });

Person.of = Person;

const Employee = ({ title = '' }) => (o = { greet: () => {} }) =>
  Object.assign(o, {
    getTitle: () => title,
    greet: pipe(o.greet, (str = '') => `${str} I'm the ${title}`),
  });

const Customer = (o = {}) => Object.assign({}, o);

const Mime = (o = {}) =>
  Object.assign(o, { greet: () => {} });

const manager = ({ id = '', name = ' ' }) =>
  pipe(Person, Employee({ title: 'Manager' }), ColorId({ id }))({ name });

const customer = pipe(Person, Customer);

const mime = pipe(Person, Mime);

// --- users
const joan = manager({
  id: 'Green',
  name: 'Joan',
});

const alex = customer({
  name: 'Alexandra',
});

const bob = mime({
  name: 'Bob',
});

console.log(joan.greet());
console.log('manager-color-id:', joan.getColorId());
console.log(alex.greet());
console.log(bob.getName());
console.log(bob.greet());
