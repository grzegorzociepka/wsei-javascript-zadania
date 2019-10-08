sayHello();
function sayHello(){
    console.log('Cześć');
}
sayHello();

//zachodzi tutaj zjawisko hoistingu jeśli wywołamy funkcje
//przed jej deklaracją
//W obu przypadkach wyświetli się to samo
funkcja();
const funkcja = () => console.log("Witaj");
funkcja();

//wyrazenia funkcyjnego nie da sie wywolac przed deklaracją,
//deklaracja jest "widoczna" ale nie mozna jej wywołać.