// A “tail-call” occurs when a function’s last act is to invoke another function,
// and then return whatever the other function returns.

var maybe = function(fn) {

    return function() {

        var len = arguments.length;
        var i = 0;

        if (len === 0) {
            return '';
        }

        while (i < len) {
            if (!arguments[i]) {
                return '';
            }
            i++;
        }

        return fn.apply(null, arguments);
    };
};
//
console.log(
    maybe(function(first, last) {
        return `hello: ${first} ${last}`;
    })('John', 'Doe')
);

// The length function calls itself, but it is not a tail-call,
// because it returns 1 + length(rest), not length(rest).
const length = ([first, ...rest]) =>
    !first ? 0 : 1 + length(rest);

console.log(length([1, 2, 3, 4]));

// converting non-tail-calls to tail-calls
// The 1 + work is done before calling itself, and by the time
// it reaches the terminal position, it has the answer
var lengthDelaysWork = function(values, numberToBeAdded) {

    var first = values[0];
    var rest = values.slice(1);

    if (!first) {
        return numberToBeAdded;
    }

    return lengthDelaysWork(rest, 1 + numberToBeAdded);
};

console.log(
    lengthDelaysWork(['foo', 'bar', 'baz'], 0)
);

var len = function(values) {
    return lengthDelaysWork(values, 0);
};

console.log(
    len(['foo', 'bar', 'baz'])
);

// Or we could use partial application:

var callLast = function(fn) {
    var slice = [].slice;
    var args = slice.call(arguments, 1);
    return function() {
        var remainingArgs = [].slice.call(arguments);
        return fn(remainingArgs.shift(), args.shift());
    };
};

var leng = callLast(lengthDelaysWork, 0);

console.log(
    leng(['foo', 'bar', 'baz', 'hey'])
);

const callLastEs6 = (fn, ...args) =>
    (...remainingArgs) =>
    fn(...remainingArgs, ...args);

console.log(
    callLastEs6(lengthDelaysWork, 0)([1, 3, 6, 6])
);
