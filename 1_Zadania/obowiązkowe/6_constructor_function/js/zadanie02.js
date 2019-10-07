function Calculator() {
    this.operations = []
}

Calculator.prototype.add = function(num1,num2){
    const result = num1 + num2;
    this.operations.push(`added ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.multiply = function(num1,num2){
    const result = num1 * num2;
    this.operations.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;
}

Calculator.prototype.subtract = function(num1,num2){
    const result = num1 - num2;
    this.operations.push(`subtracted ${num1} from ${num2} got ${result}`);
    return result;
}

Calculator.prototype.divide = function(num1,num2){
    const result = num1 / num2;
    this.operations.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function(){
    for(let i=0;i<this.operations.length;i++){
        console.log(this.operations[i]);
    }
}

Calculator.prototype.clearoperations = function(){
    this.operations = [];
}