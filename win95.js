document.querySelector("#lanceur").style.visibility = "visible";

function click1(event) {
	let start = document.querySelector("#start");
	let lanceur = document.querySelector("#lanceur");
	let etat = lanceur.style.visibility;
	if (start == event.target) {
		if (etat == "visible")
			lanceur.style.visibility = "hidden";
		else
			lanceur.style.visibility = "visible";
	}
}

addEventListener("click", click1);

function click2(event) {
	let shut = document.querySelector("#shutdown");
	if (shut == event.target)
		document.location.href = "loading.html";
}

addEventListener("click", click2);

function click3(event) {
	let x = document.querySelector(".close");
	let body = document.querySelector("body");
	let wind = document.querySelector(".window");
	if (x == event.target)
		body.removeChild(wind);
}

addEventListener("click", click3);

function click4() {
	let wind = document.createElement("div");
	document.body.appendChild(wind);
	wind.innerHTML = "<div class=\"topbar\"><span class=\"close\">x</span></div>";
	wind.classList.add("window");
}

addEventListener("dblclick", click4);

var isDragged = 0;
var xPos = 500;
var yPos = 300;
var xStart;
var yStart;
var xMouseStart;
var yMouseStart;

function click5(event) {
	isDragged = 1;
	xStart = xPos;
	yStart = yPos;
	xMouseStart = event.clientX;
	yMouseStart = event.clientY;
}

addEventListener("mousedouwn", click5);

function click6(event) {
	let x = document.querySelector(".topbar");
	if (x == event.target) {
		if (isDragged) {
			x.left = parseInt(x.left.split("px")) + xMouseStart - xStart + 'px';
			x.top = parseInt(x.top.split("px")) + yMouseStart - yStart +'px' ;
			xPos = xPos + xMouseStart - xStart;
			yPos = yPos + yMouseStart - yStart;
		}
	}
}

addEventListener("mousemove", click6);

function click7() {
	isDragged = 0;
}

addEventListener("mouseup", click7);