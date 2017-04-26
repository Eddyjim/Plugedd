var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

clickOnField();

$.fn.exists = function () {
    return this.length !== 0;
}

$("#menuListNew").children('a')[0].addEventListener('click',function(){
	console.log("menu listener");
	
	$(document).ajaxComplete( function() {
		newCaseListener();
		console.log("Ajax executed")
	});
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

function getFirstSelectBox(){
			
	$(document).ajaxComplete( function() {
		newCaseListener();
		console.log("Ajax executed 2");
		clickOnField();

	});
}

function clickOnField(){
	var fields = document.getElementsByClassName("ui-selectmenu-value");
	
	if (undefined !== fields[0]){
		fields[0].click();
	}
}