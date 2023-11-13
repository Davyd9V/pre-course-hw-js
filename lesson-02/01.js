let number1 = Math.floor(Math.random() * 100);

function proverka() {
    if (number1 % 2 === 0) {
        return [number1, 'Это четное число'];
    } else {
        return [number1, 'Это нечетное число'];
    };
};
let result = proverka();
console.log(`${result[0]}: ${result[1]}`);