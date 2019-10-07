// 0a
let city = {
    capital:'Warsaw',
    population:10000,
    president:'Trzaskowski',
    primeMinisters:['Pierwszy minister','Drugi minister']
}

console.log(city.capital,city.population,city.president,city.primeMinisters);

//0b
let timeMachine = {
    shape:'kwadrat',
    model:'model',
    run: function(date,place) {
        console.log(`Przenosimy się do ${date} w ${place}`);
    }
}

console.log(timeMachine.shape,timeMachine.model);
timeMachine.run('24.12.2019','Wioska Świętego Mikołaja');

//1
let book = {
    title:"Tytuł",
    author:"autor",
    numberOfPages:23
}

console.log(book.title,book.author,book.numberOfPages);

//2
let person = {
    name:'Adam',
    age:23,
    sayHello: () => console.log('hello')
}

console.log(person.name,person.age);
person.sayHello();

//3
let recipe = {
    title:"Jajówa",
    servings:1
}
recipe.ingredients = ['string1','string2'];

console.log(recipe.title,recipe.servings,recipe.ingredients);

//6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);
//nie istnieje, poniewaz operujemy cały czas na tym samym obiekcie.