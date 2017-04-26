var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

getFirstSelectBox();

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
	//$(document).ready(function(){
		var fields = $(".ui-selectmenu-value");
		
		$(document).ajaxComplete( function() {
			newCaseListener();
			console.log("Ajax executed")
		
			if (undefined !== fields[0]){
				fields[0].trigger("click");
			}
		});
		
		//First Field
			 
	//});
}