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

var isDragged = 0;
var xPos = 500;
var yPos = 300;
var xStart;
var yStart;
var xMouseStart;
var yMouseStart;

function click4() {
	let list = document.querySelectorAll(".window");
	if (list.length == 0) {
		let wind = document.createElement("div");
		document.body.appendChild(wind);
		wind.innerHTML = "<div class=\"topbar\"><span class=\"close\">x</span></div>";
		wind.classList.add("window");
		xPos = 500;
		yPos = 300;
	}
}

addEventListener("dblclick", click4);

//console.log(yPos) --> affiche la valeur de yPos dans la console

function click5(event) {
	var cible = document.querySelector(".topbar");
	if (cible == event.target) {
		isDragged = 1;
		xStart = xPos;
		yStart = yPos;
		xMouseStart = event.clientX;
		yMouseStart = event.clientY;
	}
}

addEventListener("mousedown", click5);

function click6(event) {
	if (isDragged) {
		let elem = document.querySelector(".window");
		elem.style.left = xStart + Math.round(event.clientX - xMouseStart) + "px";
		elem.style.top = yStart + Math.round(event.clientY - yMouseStart) + "px" ;
		xPos = parseInt(elem.style.left.split("px"));
		yPos = parseInt(elem.style.top.split("px"));
	}
}

addEventListener("mousemove", click6);

function click7() {
	isDragged = 0;
}

addEventListener("mouseup", click7);
