function validate(){
    const team1 = document.forms['TaskForm']['team1'].value;
    const points1 = document.forms['TaskForm']['points1'].value;

    const team2 = document.forms['TaskForm']['team2'].value;
    const points2 = document.forms['TaskForm']['points2'].value;

    if(team1 === team2){
        return false;
    }
    if(points1 < 0 || points2 < 0){
        return false;
    }

    addToTable({team1:team1,points1:points1,team2:team2,points2:points2});
}

function addToTable(item){
    const newTr = document.createElement('tr');
    const team1 = document.createElement('td');
    const team2 = document.createElement('td');
    const points = document.createElement('td');

    team1.innerHTML = item.team1;
    points.innerHTML = `${item.points1} - ${item.points2}`;
    team2.innerHTML = item.team2;


    newTr.appendChild(team1);
    newTr.appendChild(team2);
    newTr.appendChild(points);

    const table = document.querySelector('.container table tbody');
    table.appendChild(newTr);

}