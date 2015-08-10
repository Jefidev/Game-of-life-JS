
var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };
var lastTime = 0;

var loop = function(){

	var time = new Date().getTime();

	if(isRunning && time > lastTime + 100){

		render();
		lastTime = new Date().getTime();
		animate(loop);
	}
	else if(isRunning)
		animate(loop);
}	


//serious shit happens here
function render(){

	var oldGrid = [];

	for(var x = 0; x < gridCells.length; x++){
		oldGrid[x] = [];
		for(var y = 0; y < gridCells[x].length; y++){
			oldGrid[x][y] = gridCells[x][y].isAlive;
		}
	}

	//Scan the grid 
	for(var x = 0; x < gridCells.length; x++){
		for(var y = 0; y < gridCells[x].length; y++){

			var nbAlive = 0;

			for(var i = x-1; i <= x+1; i++){
				for(var j = y-1; j <= y+1; j++){

					if(i >= 0 && j >= 0 && i < gridCells.length && j < gridCells[x].length && (i != x || j!=y))
						if(oldGrid[i][j])
							nbAlive++;
				}
			}

			if(gridCells[x][y].isAlive){
				if(nbAlive < 2 || nbAlive > 3)
					gridCells[x][y].dead();
			}
			else{
				if(nbAlive == 3)
					gridCells[x][y].alive();
			}

		}
	}
}

