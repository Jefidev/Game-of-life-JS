
var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };

var loop = function(){

	if(isRunning){

		render();
		animate(loop);
	}
}


//serious shit happens here
function render(){

	var oldGrid = [];

	for(var p = 0; p < gridCells.length; p++){
		oldGrid[p] = gridCells[p].slice();
	}

	console.log(oldGrid[0][0]);
	console.log(gridCells[0][0]);

	//Scan the grid 
	for(var x = 0; x < gridCells.length; x++){
		for(var y = 0; y < gridCells[x].length; y++){

			var nbAlive = 0;

			for(var i = x-1; i <= x+1; i++){
				for(var j = y-1; j <= y+1; j++){

					if(i >= 0 && j >= 0 && i < gridCells.length && j < gridCells[x].length && (i != x || j!=y))
						if(oldGrid[i][j].isAlive)
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

	console.log(oldGrid[0][0]);
	console.log(gridCells[0][0]);
}

