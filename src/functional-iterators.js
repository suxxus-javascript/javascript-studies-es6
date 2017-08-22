// https://leanpub.com/javascriptallongesix/read#functional-iterators

/*

const callLeft = (fn, ...args) =>
    (...remainingArgs) =>
      fn(...args, ...remainingArgs);

const foldArrayWith = (fn, terminalValue, [first, ...rest]) =>
  first === undefined
    ? terminalValue
    : fn(first, foldArrayWith(fn, terminalValue, rest));

const arraySum = callLeft(foldArrayWith, (a, b) => a + b, 0);

arraySum([1, 4, 9, 16, 25])
  //=> 55

*/

var callLeft = function(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var remainingArgs = [].slice.call(arguments);
        return fn.apply(null, args.concat(remainingArgs));
    };
};


var r = callLeft(function(a, b) {
    return a + b
}, 1)(2);

console.log(r);
