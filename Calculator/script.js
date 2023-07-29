const userInput = document.getElementById("userInput");

var expression = "";

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
    expression = "";
}





function clear1(){
    console.log("clicked");
    expression = "";
    userInput.value = expression;
}

