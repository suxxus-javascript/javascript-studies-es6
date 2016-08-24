// https://leanpub.com/javascriptallongesix/read#arraysanddestructuring

// in JavaScript, we can actually reverse the statement and place the template on
// the left and a value on the right:
const unwrap = ([val1, val2]) => `value1: ${val1}, value2: ${val2}`;
console.log('unwrap => ' + unwrap(['Peter', 'John', 'Lois']));

// destructuring can nest
const description = ([[first, last], occupation]) =>
  `name: ${first}, last: ${last}, occupation:  ${occupation}`;
console.log('description => ' + description([['Paul', 'Doe'], 'bon vivant']));

// gathering
const everithingButTheHead = ([first, ...rest]) =>
  `head: ${first} rest: ${rest}`;
console.log('everithingButTheHead => ', everithingButTheHead(['A', 'B', 'C', 'D', 'F']));

// destructuring parameters
const foo = (...nums) => nums;
console.log(`destructuring params => ${foo(1, 2, 3, 4)}`);
