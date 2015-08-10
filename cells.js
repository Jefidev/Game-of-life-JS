//cell object

function Cell(nx, ny, ia){

    this.x = nx;
    this.y = ny;
    this.isAlive = ia;
}

Cell.prototype.alive = function(){

	this.isAlive = true;
    context.fillRect(this.x + 1, this.y + 1, sSize - 1, sSize - 1);
    context.stroke();
}

Cell.prototype.dead = function(){

	this.isAlive = false;
    context.clearRect(this.x + 1, this.y + 1, sSize - 1, sSize - 1);
}
