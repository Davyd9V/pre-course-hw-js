let number1 = Math.floor(Math.random() * 100);
let message = `${number1}: Это ${number1 % 2 === 0 ? 'четное' : 'нечетное'} число`;
console.log(message);