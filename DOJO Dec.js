//coordinate constructor
function coordinate(x, y){
	this.x = x;
	this.y = y;
}

function split_line(begin, end){
	//This function splits the line into three equal segments
	//and creates an equilateral triangle in the middle segment.
	// ___  ==>  _/\_
	//Inputs: coordinates of begining and end points of the line.
	//Outputs: an array of coordinates of the three split points.
	//The outputs are to be used to draw the fractal snowflake.

 	var split_p1 = new coordinate();	//split point 1
 	var split_p2 = new coordinate();	//split point 2
  	var split_p3 = new coordinate();	//split point 3
  	var vector = new coordinate();		//intermediate variable
  	var vector_new = new coordinate();	//intermediate variable
  	var angle_rad = 60*(Math.PI/180);	//60 deg in radians
  	
  	split_p1.x = begin.x + ((end.x - begin.x)/3);	//One third of the line
	split_p1.y = begin.y + ((end.y - begin.y)/3);
  	split_p3.x = begin.x + (2*(end.x-begin.x)/3);	//Two thirds of the line
	split_p3.y = begin.y + (2*(end.y-begin.y)/3);

	vector.x = (split_p3.x-split_p1.x);	
	vector.y = (split_p3.y-split_p1.y);
	//rotate the vector by 60 degrees (angle of an equilateral triangle)
	vector_new.x = vector.x*Math.cos(angle_rad) - vector.y*Math.sin(angle_rad);
	vector_new.y = vector.y*Math.cos(angle_rad) + vector.x*Math.sin(angle_rad);

	split_p2.x = split_p1.x + vector_new.x;
	split_p2.y = split_p1.y + vector_new.y;
	return [split_p1, split_p2, split_p3];
}

//Test the function
var line_start = new coordinate(0, 0);
var line_finish = new coordinate(9, 0);
var split_points = split_line(line_start, line_finish);

console.log(split_points[0]);	//expected x: 3, y:0
console.log(split_points[1]);	//expected x: 4.5, y: 2.598
console.log(split_points[2]);	//expected x: 6, y: 0