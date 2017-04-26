var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

//getFirstSelectBox();

/*document.getElementById("menuListNew").onclick = function(){
	console.log("menu listener");
	newCaseListener();
}*/

$.fn.exists = function () {
    return this.length !== 0;
}

$("#menuListNew").children('a')[0].addEventListener('click',function(){
	console.log("menu listener");
	

	$(document).ajaxComplete(function() {
	newCaseListener();
	alert("An individual AJAX call has completed successfully");
	});
	
	
	$.when($(".process").length > 0).then(newCaseListener);
},false);

function newCaseListener(){	
	var elems = $(".process");
	var i;
	for (i = 0; i < elems.length ; i++){
		elems[i].addEventListener('click',function(){
		console.log("executed append");
		getFirstSelectBox();
	},false);
	}
	
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
