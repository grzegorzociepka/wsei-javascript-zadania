/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//deklaracja pierwszej metody
function jeden() {

    //zadeklarowanie zmienna1 i przypisanie jej wartości
    var zmienna1 = 1;

    //deklaracja drugiej metody
    function dwa() {

        //logowanie zmiennej zadeklarowanej wyzej, w funkcji jeden
        console.log(zmienna1);

        //zadeklarowanie zmienna2 i przypisanie jej wartości
        var zmienna2 = 3;
    }

    //wywołanie drugiej funkcji
    dwa();

    //próba logowania zmienna2, pokaze sie błąd undefined, bo zmienna2 jest w innym scope
    //nie jest tutaj dostępna
    console.log(zmienna2)
}

//wywołanie funkcji pierwszej
jeden()