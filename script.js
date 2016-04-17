function create() {
	var count = prompt("Number of Squares: ");
	var size = (500-count)/count;
	del = count;
	var y =document.createElement("DIV");
	y.setAttribute("id","container");
	y.style.height = "500px";
	y.style.width = "500px";
	y.style.position = "absolute";
	y.style.top = "0";
	y.style.left = "0";
	var topside;
	var leftside = 0;
	for(var j=0;j<count;j++)
	{
		topside = 0;
		for(var i=0;i<count;i++)
		{
			var x =document.createElement("DIV");
			x.setAttribute("onmouseover","this.className='hover'");
			x.style.height = size+"px";
			x.style.width = size+"px";
			x.style.marginTop = "1px";
			x.style.marginLeft = "1px";
			x.style.position = "absolute";
			x.style.top = topside+"px";
			x.style.left = leftside+"px";
			x.style.backgroundColor = "blue";
			y.appendChild(x);
			document.body.appendChild(y);
			topside = topside+size+1;
		}
		leftside = leftside+size+1;
	}
}
function reset() {
	var Y = document.getElementById("container");
	document.body.removeChild(Y);	
}
function enter() {
	this.className = "hover";
}
function leave() {
	this.className = "";
}