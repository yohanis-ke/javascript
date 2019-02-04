//This one is generate error message, becuase function expression is hoisted only the name not the definition

//console.log(total(3,2));


//var total=function(num1,num2){
//  return num1+num2;
//}

//This one is work corrctly, because the function decorration is hoisted including the deffinition.
//If the function declear using the keyword var, let or const, it is called function expression
//But the function decleasrs without the above keyword is called function decoration

console.log(total(3,2));
console.log(variable);

function total(num1,num2){
  return num1+num2;
}

var variable="declear"
