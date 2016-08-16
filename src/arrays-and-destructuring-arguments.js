// https://leanpub.com/javascriptallongesix/read#arraysanddestructuring

// in JavaScript, we can actually reverse the statement and place the template on
// the left and a value on the right:

const unwrap = value => {
  const [
    val1,
    val2
  ] = value;

  return `value1: ${val1}, value2: ${val2}`;
};

console.log('---> ' + unwrap(['Peter','John','Lois']) );
