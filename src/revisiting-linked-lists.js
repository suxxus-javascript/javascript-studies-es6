// https://leanpub.com/javascriptallongesix/read#pojos
// JavaScript Allongé, the "Six" Edition 
const OneTwoThree = {
    first: 1,
    next: {
        first: 2,
        next: {
            first: 3,
            next: {
                first: 4,
                next: {}
            }
        }
    }
};

const len = (node, delayed = 0) => {

    if (Object.keys(node).length === 0) {
        return delayed;
    }

    return len(node.next, delayed + 1);

};

console.log('linked list len ---> ', len(OneTwoThree));

const oneTwoThree = {
    first: 1,
    next: {
        first: 2,
        next: {}
    }
};

const reverse = (node, delayed = {}) => {

    if (Object.keys(node).length === 0) {
        return delayed;
    }

    return reverse(node.next, {
        first: node.first,
        next: delayed
    });
};
console.log('reverse--> ', reverse(oneTwoThree));

const reverseMapWith = (fn, node, delayed = {}) => {

    if (Object.keys(node).length === 0) {
        return delayed;
    }

    return reverseMapWith(fn, node.next, {
        first: fn(node.first),
        next: delayed
    });
};

console.log('reverseMapWith ---> ', reverseMapWith(x => x * x, oneTwoThree));

const mapWith = (fn, node, delayed = {}) => {

    if (Object.keys(node).length === 0) {
        return reverse(delayed);
    }

   return mapWith(fn, node.next, {
        first: fn(node.first),
        next: delayed
    });
};
console.log('mapWith ---> ', mapWith(x => x + x, oneTwoThree));


console.log('======== END - revisiting linked - =========\n');
