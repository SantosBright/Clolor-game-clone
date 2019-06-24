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


for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            changeColor(clickedColor)
        } else {
            this.style.background = "#232323";
        }
    });
} 

function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}