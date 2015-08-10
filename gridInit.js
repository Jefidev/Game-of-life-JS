//grid width and height
var bw;
var bh; 

//size of canvas
var cw
var ch

var sSize = 20; //Square size
var border = 8; //border of page



//All cells existing on the board.

var gridCells = [];

//simulation run ?

var isRunning = false;

//get canvas info
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var mouseIsDown = false

var lastMoveX = -1;
var lastMoveY = -1

window.onload = function(){
    bw = window.innerWidth;
    bh = window.innerHeight;

    ch = bh - bh%sSize - (sSize - 1);
    cw = bw - bw%sSize - (sSize - 1);

    canvas.addEventListener('mousedown', mDown, false);
    canvas.addEventListener('mouseup', function(){mouseIsDown = false}, false);
    canvas.addEventListener('mousemove', mMove, false);

    initBoard();
}

function initBoard(){

    canvas.width = cw;
    canvas.height = ch;

    for (var x = 0; x <= cw; x += sSize) {
        context.moveTo(0.5 + x, 0);
        context.lineTo(0.5 + x, bh);
    }


    for (var x = 0; x <= ch; x += sSize) {
        context.moveTo(0, 0.5 + x);
        context.lineTo(bw, 0.5 + x);
    }

    context.strokeStyle = "black";
    context.stroke();

    var x = cw/sSize;
    var y = ch/sSize;

    for(var i = 0; i < x; i++){
        gridCells[i] = [];

        for(var j = 0; j < y; j++){
            gridCells[i][j] = new Cell(i*sSize, j*sSize, false);
        }
    }
}


//Start simulation

window.addEventListener("keydown", function(event) {
  if(event.keyCode == 13 && !isRunning){


    canvas.removeEventListener('mousedown', mDown, false);

    isRunning = true;
    loop();
  } 
  else if(event.keyCode == 13 && isRunning){
    canvas.addEventListener('mousedown', mDown, false);
    isRunning = false;
  }
  else if(event.keyCode == 82 && !isRunning){
    initBoard();
  }
});


function mDown(loc){
    var x = loc.pageX - border;
    var y = loc.pageY - border;

    x = x - x % sSize;
    y = y - y % sSize;

    lastMoveY = y;
    lastMoveX = x;

    mouseIsDown = true;

    if(!gridCells[x/sSize][y/sSize].isAlive)
        gridCells[x/sSize][y/sSize].alive();

    else
      gridCells[x/sSize][y/sSize].dead();
  
}

function mMove(loc){

    if(!mouseIsDown)
        return

    var x = loc.pageX - border;
    var y = loc.pageY - border;

    x = x - x % sSize;
    y = y - y % sSize;

    if(lastMoveX == x && lastMoveY == y)
        return;

    lastMoveX = x;
    lastMoveY = y;

    if(!gridCells[x/sSize][y/sSize].isAlive)
        gridCells[x/sSize][y/sSize].alive();

    else
      gridCells[x/sSize][y/sSize].dead();
  
}

