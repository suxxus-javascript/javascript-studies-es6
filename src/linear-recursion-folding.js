var sumSquares = function(values) {
    var first = values.shift();
    if (first === undefined) {
        return 0;
    }
    return (first * first) + sumSquares(values);
};
console.log(
    'sumSquares should return sum of squares',
    sumSquares([2, 3, 4])
);

const sumSquaresEs6 = ([first, ...rest]) =>
    first === undefined ? 0 : (first * first) + sumSquaresEs6(rest);

console.log(
    'sumSquaresEs6: should return sum of squares',
    sumSquares([2, 3, 4])
);

var foldWith = function(fn, terminalVal, values) {
    var first = values.shift();
    if (first === undefined) {
        return terminalVal;
    }
    return fn(first, foldWith(fn, terminalVal, values));
};
console.log(
    'foldWith ---> ',
    foldWith(function(first, rest) {
        return first * first + rest;
    }, 0, [2, 3, 4])
);

const foldWithEs6 = (fn, terminalVal, [first, ...rest]) =>
    first === undefined ? terminalVal : fn(first, foldWithEs6(fn, terminalVal, rest));

console.log('foldWithEs6 ---> ',
    foldWithEs6((first, rest) => (first * first) + rest, 0, [2, 3, 4])
);

var minVal = function(values) {

    var doMin = function(val1, val2) {
        return val1 < val2 ? val1 : val2;
    };

    return foldWithEs6(doMin, values[0], values);
}

console.log(
    'minVal --> ',
    minVal([2, 1, 4, 1])
);
