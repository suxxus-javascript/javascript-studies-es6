const user = {
    name: {
        first: 'Reginald',
        last: 'Braithwaite'
    },
    occupation: {
        title: 'Author',
        responsibilities: ['JavaScript Allongé',
            'JavaScript Spessore',
            'CoffeeScript Ristretto'
        ]
    }
};

const user2 = JSON.parse(JSON.stringify(user));

console.log('---> user.name.first', user.name.first);


const {
    name: {
        first: given,
        last: surname
    },
    occupation: {
        title: tit
    }
} = user;

console.log('---> given', given);



const {
    name: {
        first,
        last
    },
    occupation: {
        title
    }
 } = user2;
console.log('---> title', title);


console.log('======== END - destructuring objects - =========\n');
