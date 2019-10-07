//0
const car ={
    brand:"Opel",
    color:"silver",
    numberOfKilometers:0,
    printCarinfo:function(){console.log(this.brand,this.color,this.numberOfKilometers)},
    drive:function(km){this.numberOfKilometers += km}
}

car.printCarinfo(); 
car.drive(20);
car.printCarinfo(); 

//1
car.technicalReview = [];
car.addReview = function(date){
    this.technicalReview.push(date);
}
car.getReviews = function(){
    for(let i=0;i<this.technicalReview.length;i++){
        console.log(this.technicalReview[i]);
    }
}

//3

const stairs = {
    step:0,
    up:function(){
        this.step++;
    },
    down:function(){
        this.step--;
    },
    printStep:function(){
        console.log(this.step);
    }
}
