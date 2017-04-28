var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

tabToAddInTable();

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

$(':focus').keydown(function(e) {
    var code = e.keyCode || e.which;

    if (code === 9 ){
		clickNextTable($(":focus").get(0));
	}
});

function getNetxtContainer(elem){
	var aux = elem;
	var position;
	while (!aux.parent().hasClass("ui-bizagi-container-form")){
		aux = aux.parent();
	}
	if (aux.parent().hasClass("ui-bizagi-container-form")){
		position = aux.index();
	}
	return aux.parent().eq(position+1);
}

function clickNextTable(elem){
	var nextElem = getNetxtContainer(elem);
	
	if (nextElem.find(".ui-bizagi-grid-buttons").length > 0){
		nextElem.find(".ui-bizagi-grid-buttons").eq(0).eq(0).trigger("click");
	}
}

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

function tabToAddInTable(){
	var buttonss = document.getElementsByClassName("ui-bizagi-grid-buttons");
	
	if (undefined !== buttonss[0]){
		buttonss[0].children[0].children[0].click();
	}
	
}

