//1
const getNumber = (number, array) => array.includes(number);
//2
const createIdentityMatrix = (rows, cols) => {
    const array = [];
    for (let i = 0; i < rows; i++) {
        const innerArray = [];
        for (let j = 0; j < cols; j++) {
            i === j ? innerArray.push(1) : innerArray.push(0);
        }
        array.push(innerArray);
    }
    return array;
};
//dodatkowe 1
const addTheSameNumbers = (number, array) => {
    if (!array.includes(number)) {
        return null;
    }
    return array.reduce((prev, curr) => {
        if (curr === number) {
            return prev + curr;
        }
        return prev;
    }, 0);
};
//dodatkowe 2
const factors = (number) => {
    if (number < 0) {
        return [];
    }
    return Array
        .from(Array(number + 1), (_, i) => i)
        .filter(i => number % i === 0)
        .sort((a, b) => b - a);
};
//dodatkowe 3
const getMissingElement = (array) => {
    let missingNumber = null;
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i] - array[i + 1]) > 1) {
            missingNumber = array[i] + 1;
            break;
        }
    }
    return missingNumber;
};
//dodatkowe 4
const getLastNumbers = (lastNumberCount, array) => {
    if (lastNumberCount && typeof lastNumberCount === 'number') {
        return array.slice(-lastNumberCount);
    }
return [];
}