var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

tabToAddInTable();


$.fn.exists = function () {
    return this.length !== 0;
}

$("#menuListNew").children('a')[0].addEventListener('click',function(){
    
	$(document).ajaxComplete(function() {
    newCaseListener();
    console.log("ajax call");
    });

},false);


function getNetxtContainer(elem){
	var aux = elem;
	var position;
	while (!aux.parent().hasClass("ui-bizagi-container-form")){
		aux = aux.parent();
		console.log("getting parent");
	}
	if (aux.parent().hasClass("ui-bizagi-container-form")){
		position = aux.index();
		console.log("next container found!");
	}
	return aux.parent().eq(position+1);
}

function clickNextTable(elem){
	var nextElem = getNetxtContainer(elem);
	
	if (nextElem.find(".ui-bizagi-grid-buttons").length > 0){
		console.log("clicking next +");
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

function getDashboard(){
	
	
}

function getFirstSelectBox(){
	$(document).ajaxComplete( function() {
		newCaseListener();
		console.log("Ajax executed 2");
		$($($("#ui-bizagi-wp-project-plan-content-dashboard")[0]).find(".ui-bizagi-container-form").find("input")[0]).trigger("click");
		//clickOnField();
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