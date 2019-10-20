console.log("Hello world");
const multiplyByTwo = (number = 1) => number * 2;
console.log(multiplyByTwo());
const greater = (number1, number2) => number1 < number2 ? number2 : number1;
console.log(greater(2, 5));
const getSecondMaxNumber = (array) => array.sort((a, b) => b - a)[1];
console.log(getSecondMaxNumber([2, 3, 1, 6, 100, 49, 5, 7, 8, 9]));
const x = (number) => {
    (function (number) {
        console.log(number)
    }(number)
    );
};
x(5);
const y = (initialValue = 10) => {
    let incrementalValue = 0;
    const inter = setInterval(() => {
        if (++incrementalValue === initialValue) {
            clearInterval(inter);
        }
        console.log('Hello');
    }, 1000);
};
y();