var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var resetBtn = document.querySelector("#resetBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    var messageDisplay = document.querySelector("#messageDisplay");
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            changeColor(clickedColor);
            messageDisplay.textContent = "Correct!";
            h1.style.background = clickedColor;
            resetBtn.textContent = "Play Again?"
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Wrong!"
        }
    });
} 

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("active");
    easyBtn.classList.add("active");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none"; 
        }
    }
});
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("active");
    hardBtn.classList.add("active");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetBtn.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    resetBtn.textContent = "New Colors"
    messageDisplay.textContent = " "
});

function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor(){
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