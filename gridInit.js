//grid width and height
var bw;
var bh; 

//size of canvas
var cw
var ch

//square size

var sSize = 20;

//All cells existing on the board.

var cells = [];

//simulation run ?

var isRunning = false;

//get canvas info
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


window.onload = function(){
    bw = window.innerWidth;
    bh = window.innerHeight;

    ch = bh + 1;
    cw = bw + 1;

    canvas.addEventListener('click', canvasClick, false);

    drawBoard();
}

function drawBoard(){

    canvas.width = cw;
    canvas.height = ch;

    for (var x = 0; x <= bw; x += sSize) {
        context.moveTo(0.5 + x, 0);
        context.lineTo(0.5 + x, bh);
    }


    for (var x = 0; x <= bh; x += sSize) {
        context.moveTo(0, 0.5 + x);
        context.lineTo(bw, 0.5 + x);
    }

    context.strokeStyle = "black";
    context.stroke();
}


//Start simulation

window.addEventListener("keydown", function(event) {
  if(event.keyCode == 13 && !isRunning){


    canvas.removeEventListener('click', canvasClick, false);

    isRunning = true;
    loop();
  } 
  else{
    canvas.addEventListener('click', canvasClick, false);
    isRunning = false;
  }
});


function canvasClick(loc){
    var x = loc.pageX - 8;
    var y = loc.pageY - 8;

    x = x - x % sSize;
    y = y - y % sSize;

    var c = new Cell(x, y);
    cells.push(c);

    c.draw();
}

