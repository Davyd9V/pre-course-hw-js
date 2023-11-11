let number1 = Math.floor(Math.random() * 100);

function proverka() {
    if (number1 % 2 === 0) {
        return (number1, ': thes is even number');
    } else {
        return (number1, ': thes is odd number');
    };
};
console.log(proverka());