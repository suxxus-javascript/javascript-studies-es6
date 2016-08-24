// https://leanpub.com/javascriptallongesix/read#linear-recursion
// Recursive algorithms follow the “divide and conquer” strategy for solving a problem:

//    Divide the problem into smaller problems
//    If a smaller problem is solvable, solve the small problem
//    If a smaller problem is not solvable, divide and conquer that problem
//    When all small problems have been solved, compose the solutions into one big solution

var arr = [];
var arr1 = [...[1, 2, 3]];
var arr2 = [1, ...[]];
var arr3 = [1, ...[2, 3]];

console.log(
    arr,
    arr1,
    arr2,
    arr3
);

var ln = function(value) {
    var first = value.shift();
    var rest = value;
    return !first ? 0 : 1 + ln(rest);
};
console.log(ln([1, 2, 3]));

const len = ([first, ...rest]) => !first ? 0 : 1 + len(rest);
console.log(len([4, 5, 6, 7]));

var flattenEmpty = function(value) {
    return value.length === 0 ? [] : '';
};
console.log(
    'flattening an empty array will produce an empty array.',
    flattenEmpty([])
);

var elemIsNotArrayType = function fl(value) {
    var first = value.shift();
    return !Array.isArray(first) ? value.slice(0) : '';
};
console.log(
    'if an element isn’t an array, we don’t flatten it',
    elemIsNotArrayType(['a', 'b'])
);
