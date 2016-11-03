// https://leanpub.com/javascriptallongesix/read#mutation

// JavaScript permits the reassignment of new values to existing bindings, 
// as well as the reassignment and assignment of new values to elements of 
// containers such as arrays and objects. Mutating existing objects has special 
// implications when two bindings are aliases of the same value.

// Note well: Declaring a variable const does not prevent us from mutating its value, 
// only from rebinding its name. This is an important distinctio

// most important point about this is that the identities
// were the same, because they were the same value
const allHallowsEve = [2012, 10, 31];
(function(halloween) {
    console.log('should equal--> ', String(halloween) === String(allHallowsEve));
})(allHallowsEve);


(function(halloween) {
    halloween = [2016, 10, 31];
    console.log('should not equal--> ', String(halloween) !== String(allHallowsEve));
})(allHallowsEve);


console.log('======== END - mutation - =========\n');

// One pattern many people follow is to be liberal with mutation 
// when constructing data, but conservative with mutation when consuming data

const oneToFive = {
    value: 'one',
    next: {
        value: 'two',
        next: {
            value: 'three',
            next: {
                value: 'four',
                next: {
                    value: 'five',
                    next: {}
                }
            }
        }
    }
};
console.log('oneToFive ---> ', oneToFive);

const threeToFive = oneToFive.next.next;
console.log('threeToFive ---> ', threeToFive);

threeToFive.next.value = 4;
console.log('mutated threeToFive ---> ', JSON.stringify(threeToFive));
console.log('mutated oneToFive ---> ', JSON.stringify(oneToFive));

console.log('======== END - mutation and data structures - =========\n');
