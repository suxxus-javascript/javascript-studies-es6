// https://leanpub.com/javascriptallongesix/read#linear-recursion
// Recursive algorithms follow the “divide and conquer” strategy for solving a problem:

//    Divide the problem into smaller problems
//    If a smaller problem is solvable, solve the small problem
//    If a smaller problem is not solvable, divide and conquer that problem
//    When all small problems have been solved, compose the solutions into one big solution

const arr = [];
const arr1 = [...[1, 2, 3]];
const arr2 = [1, ...[]];
const arr3 = [1, ...[2, 3]];
const arr4 = [...['a', 'b'], ...['x', 'y']];
const [value1, ...value2] = [
    ['Pep'], 'Rita', 'Alice', 'Joana'
];

console.log(
    arr,
    arr1,
    arr2,
    arr3,
    arr4,
    value1,
    value2
);

// array length
var ln = function(value) {
    var first = value.shift();
    var rest = value;
    return !first ? 0 : 1 + ln(rest);
};
console.log(ln([1, 2, 3]));

// array length ES6
const len = ([first, ...rest]) => !first ? 0 : 1 + len(rest);
console.log(len([4, 5, 6, 7]));

// --------------------------------------------
var flattenEmpty = function(value) {
    return value.length === 0 ? [] : value;
};
console.log(
    'flattening an empty array will produce an empty array.',
    flattenEmpty([])
);

var elemIsNotArrayType = function(value) {
    var firstIsNotArray = !Array.isArray(value[0]);
    if (firstIsNotArray) {
        var first = value.shift();
        return [first];
    }

    return value;
};
console.log(
    'if an element isn’t an array, we don’t flatten it',
    elemIsNotArrayType(['a', 'b'])
);

var concatFirstElement = function(value) {
    var first = value.shift();
    var rest = value;
    var firstIsArray = Array.isArray(first);

    if (firstIsArray) {
        return [].concat(first);
    }

    return rest;
};
console.log(
    'if first element is an array we flatten it and put it with the rest',
    concatFirstElement([
        ['a'], 'b', ['c']
    ])
);


var flattenArray = function(value) {

    if (value.length === 0) {
        return [];
    }

    if (!Array.isArray(value[0])) {
        var first = value.shift();
        return [first]
            .concat(flattenArray(value));
    }

    return []
        .concat(flattenArray(value.shift()))
        .concat(flattenArray(value));
};

console.log(
    'flatten Array',
    flattenArray([
        ['a'], 'b', ['c']
    ])
);

const flattenArrayEs6 = ([first, ...rest]) => {

    if (!first) {
        return [];
    }

    if (!Array.isArray(first)) {
        return [first, ...flattenArrayEs6(rest)];
    }

    return [...flattenArrayEs6(first), ...flattenArrayEs6(rest)];
};

console.log(
    'flattenArrayEs6: ',
    flattenArrayEs6([
        ['a'], 'b', ['c']
    ])
);
