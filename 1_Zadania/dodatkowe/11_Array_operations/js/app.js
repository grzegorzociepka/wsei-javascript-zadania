document.addEventListener('DOMContentLoaded', function () {
    var numbers = [5, 10, 12, 20, 100];
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    })
    console.log(result);

    //0
    const cities = ['Kraków', 'Olsztyn', 'Szczecin', 'Ostrów Wielkopolski'];
    console.log(...cities.map(city => city.length));
    //1
    const randomize = (param1, param2, callback) => {
        if (param1 < param2) {
            [param1, param2] = [param2, param1];
        }
        const randomNumber = Math.floor(Math.random() * (param1 - param2 + 1)) + param2;
        if (typeof callback === 'function') {
            return callback(randomNumber);
        }
    };
    randomize(6, 1, (number) => console.log(number));
    //2
    const animals = ['cat', 'shrimp', 'giraffe'];
    animals.forEach(animal => console.log(animal));
    //3
    const years = [1995, 1856, 2014, 1987];
    const ages = years.map(year => new Date().getFullYear() - year);
    console.log(...ages);
    //4
    const newNumbers = [5, 10, 12, 20, 100];
    const sumNumber = newNumbers.reduce((prev, curr) => prev + curr, 0);
    const multiplyNumbers = newNumbers.reduce((prev, curr) => prev * curr, 1);
})