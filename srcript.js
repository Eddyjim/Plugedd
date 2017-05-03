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
	$(".process").click(function(){
		console.log("executed append");
		getFirstSelectBox();
	});
	/*var i;
	for (i = 0; i < elems.length ; i++){
		elems[i].addEventListener('click',function(){
			console.log("executed append");
			getFirstSelectBox();
		},false);
	}*/
}

function setTabEvent(){
	console.out("getting dashboard");
	var dashboard = $("#ui-bizagi-wp-project-plan-content-dashboard")[0];
	
	//ui-bizagi-render
	var grid = $($($(dashboard).find(".ui-bizagi-grid-wrapper").parent()).parent()).parent();
	if (grid.length > 0){
		console.out("found grid");
	}
	var gridParent = $(grid).parent();
	var parentChilds = $(gridParent).children().length;
	var lastInputBefore;
	var inputsCounts;
	
	//If the inmeditate parent has another children
	if (parentChilds > 1){
		inputsCounts = $($(gridParent).eq(0)).find("input").length;
		console.out("seting tabs");
		//Find last input before the grid
		lastInputBefore = $($($(gridParent).eq(0)).find("input")[inputsCounts-1]);
	} else{
		//Get inmediate parent as grid root
		grid = $(grid).parent();
		gridParent = $(grid).parent();
		//Get the index of the grid to the relative parent
		var gridIndexToParent = $(gridParent).index(grid);
		
		if ($($(grid).parent()).length > 1 && gridIndexToParent != 0){
			inputsCounts = $(gridParent).find("input").length;
			lastInputBefore = $($($(gridParent).eq(0)).find("input")[inputsCounts-1]);
		}
	}
		
	$(lastInputBefore).on('keydown', function(e) { 
		var keyCode = e.keyCode || e.which; 

		if (keyCode == 9) { 
			e.preventDefault(); 
			$($(grid).find(".ui-bizagi-grid-buttons")[0]).trigger("click");
		} 
	});
	
}

function getFirstSelectBox(){
	$(document).ajaxComplete( function() {
		newCaseListener();
		console.log("Ajax executed 2");
		$($($("#ui-bizagi-wp-project-plan-content-dashboard")[0]).find(".ui-bizagi-container-form").find("input")[0]).trigger("click");
		setTabEvent();
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