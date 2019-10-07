
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];


//0
function checkArray(inputArray){
return inputArray.map(x=>x.every((num)=>num % 2 === 0));
}

//1
function firstTask(){
    console.log(task1Array[3][2]);
    console.log(task1Array[1].length);
    console.log(task1Array[4][2]);
}

//2
function secondTask(){
    for(let i = 0;i<task2Array[0].length;i++){
        console.log(task2Array[0][i]);
    }
    for(let i = 0; i< task2Array.length;i++){
        console.log(task2Array[i].length);
    }
    for(let i = 0; i< task2Array.length;i++){
        for(let l = 0; l < task2Array[i].length;l++){
            console.log(task2Array[i][l]);
        }
    }
}

//3
function print2DArray(inputarray){
    for(let i = 0; i< inputarray.length;i++){
        for(let l = 0; l < inputarray[i].length;l++){
            console.log(inputarray[i][l]);
        }
    }
}

//4
const task4Array = [
    [1, 2, 3, 4],
    ['pięc', 'sześć', 'siedem', 'osiem'],
    ['jablko', 'kiwi']
];

//5
function create2DArray(rows,columns){
    let myDoubleArray = new Array(rows);

    for(var i = 0;i<rows;i++)
        myDoubleArray[i] = new Array(columns);
    let index = 0;
    for(let i = 0; i< myDoubleArray.length;i++){
        
        for(let l = 0; l < myDoubleArray[i].length;l++){
            myDoubleArray[i][l] = index;
            index++;
        }
    }
return myDoubleArray;
}