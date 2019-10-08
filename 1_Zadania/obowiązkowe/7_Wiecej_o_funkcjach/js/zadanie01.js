
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja metody
function sortArray() {

    //zadeklarowanie zmiennej points i przypisanie wartości
    //w tym przypadku tablica z liczbami całkowitymi
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywołanie metody sort na tablicy zadeklarowanej wyzej.
    points.sort(function (a, b) {
        //sortowanie rosnąco
        // algorytm porównuje dwa elementy tablicy,
        // mniejszy stawia po lewej, a większy po prawej
        return a - b;
    });

    //zwracamy posortowaną tablice
    return points;
}

//wywołanie metody
sortArray();
