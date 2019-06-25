var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var resetBtn = document.querySelector("#resetBtn");
var h1 = document.querySelector("h1");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeBtns();
    setUpSquares();
    reset();
}

function setUpModeBtns(){
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("active");
            modeBtns[1].classList.remove("active");
            this.classList.add("active");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}
function setUpSquares(){
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
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    resetBtn.textContent = "New Colors"
    messageDisplay.textContent = " "
}
resetBtn.addEventListener("click", function(){
    reset();
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