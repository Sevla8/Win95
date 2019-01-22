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
	if (shut == event.target) {
		document.location.href = "controle.1.1_loading.html"
	}
}

addEventListener("click", click2);

function click3(event) {
	let x = document.querySelector(".close");
	let body = document.querySelector("body");
	let wind = document.querySelector(".window");
	if (x == event.target) {
		body.removeChild(wind);
	}
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

var xPos = ;
var yPos = ;