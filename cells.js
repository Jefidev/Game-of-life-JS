//cell object

function Cell(nx, ny){

    this.x = nx;
    this.y = ny;
}

Cell.prototype.draw = function(){

    context.fillRect(this.x + 1, this.y + 1, sSize - 1, sSize - 1);
    context.stroke();
}


Cell.prototype.update = function(){
	
}