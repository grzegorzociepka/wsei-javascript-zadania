function countHello(howMany){
    var counter = 1;
    setTimeout(function() {
        console.log('Hello');
        counter++;
        if(counter > howMany){
            clearInterval(interval);
        }
    },500);
}