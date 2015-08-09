
var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };

var loop = function(){

	if(isRunning){

		render();
		animate(loop);
	}
}


//serious shit happens here
function render(){

	
}

