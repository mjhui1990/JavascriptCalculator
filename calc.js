/*
 * Implement all your JavaScript in this file!
 */

$(document).ready(function(){

var inputs = [""];

var total;

var symbols = ['+','-','/','*'];

var decimal = ['.'];

var numbers = [1,2,3,4,5,6,7,8,9,0]

function getValue(input){
     if(decimal.includes(inputs[inputs.length-1])===true && input==="."){
    console.log("Duplicate '.'");
  }
      //Validation so it doesn't start with an operator
    else if(inputs.length===1 && symbols.includes(input)===false){
      inputs.push(input);
    }
    //If last character was not an operator add operator to the array
  else if(symbols.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
    else if(numbers.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
function update(){
    total= inputs.join("");
    $("#display").val(total);
    console.log(inputs);
  }
  function getTotal(){
    total = inputs.join("");
    $("#display").val(eval(total));
  }
  
  $("button").on("click",function(){
    if(this.id==="clearButton"){
      inputs = [""];
      update();
    }
    else if(this.id==="equalsButton"){
      getTotal();
    }
    else{
      
      //error1
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
        getValue($(this).text());
      }
      else {
        getValue($(this).text());
      }
    } 
  });
  
});

