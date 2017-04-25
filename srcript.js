var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

//getFirstSelectBox();

document.getElementById("menuListNew").onclick = function(){
	console.log("menu listener");
	newCaseListener();
}

$("#menuListNew").children('a')[0].click(function(){
	console.log("menu listener");
	newCaseListener();
});

function newCaseListener(){}
	$(".process").click(function(){
		console.log("executed append");
		getFirstSelectBox();
	});
}
var processes = document.getElementsByClassName("process");

for (i = 0; i < processes.length ; i++){
	processes[i].onclick = function(){
		console.log("executed append");
		getFirstSelectBox();
	}
}

function getFirstSelectBox(){
	
	var x = document.getElementsByClassName("ui-selectmenu-value");
	var i;
	x[0].click();
	
}
