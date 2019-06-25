var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    var messageDisplay = document.querySelector("#messageDisplay");
    var h1 = document.querySelector("h1");

    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            changeColor(clickedColor);
            messageDisplay.textContent = "Correct!";
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Wrong!"
        }
    });
} 

function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor(num){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for(var i =0; i < num; i++){
        arr.push(randomColors());
    }
    return arr;
}
function randomColors(){
   var r =  Math.floor(Math.random() * 256 );
   var g =  Math.floor(Math.random() * 256 );
   var b =  Math.floor(Math.random() * 256 );
   return "rgb(" + r + ", " + g + ", " + b + ")";
}