var colors = [
    'rgb(255, 0, 255)',
    'rgb(255, 0, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255, 255)',
    'rgb(0, 255, 0)',
    'rgb(255, 255, 0)'
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    var messageDisplay = document.querySelector("#messageDisplay");

    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            changeColor(clickedColor);
            messageDisplay.textContent = "Correct!";
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