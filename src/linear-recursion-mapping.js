// let’s write our own using linear recursion
var squareAll = function(value) {
    var first = value.shift();

    if (!first) {
        return [];
    }

    return []
        .concat([first * first])
        .concat(squareAll(value));

};

console.log(
    squareAll([9, 16])
);

const squareAllEs6 = ([first, ...rest]) =>
    !first ? [] : [(first * first), ...squareAllEs6(rest)];

console.log(
    squareAllEs6([9, 16])
);

// functions as arguments
var mapWith = function(fn, value) {

    var first = value.shift();

    if (!first) {
        return [];
    }

    return []
        .concat([fn(first)])
        .concat(mapWith(fn, value));
};

console.log(
    mapWith(
        function(val) {
            return val * val;
        }, [2, 4]
    )
);

const mapWithEs6 = (fn, [first, ...rest]) =>
    !first ? [] : [fn(first), ...mapWithEs6(fn, rest)];

console.log(
    mapWithEs6(val => val * val, [2, 4])
);
