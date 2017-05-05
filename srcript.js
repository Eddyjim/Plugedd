var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';


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
}

function getFirstSelectBox(){
	$(document).ajaxComplete( function() {
		console.log("Ajax executed 2");
		$($($("#ui-bizagi-wp-project-plan-content-dashboard")[0]).find(".ui-bizagi-container-form").find("input")[0]).trigger("click");
		setTabEvent();
		//clickOnField();
	});
}

function setTabEvent(){

	var dashboard = $("#ui-bizagi-wp-project-plan-content-dashboard")[0];
	//ui-bizagi-render
	var grid = $(dashboard).find(".ui-bizagi-grid").parent().parent().parent().parent();

	if (grid.length > 0){

		var gridParent = grid.parent();
		var lastInputBefore;
		var inputFoundIndexToParent;
		var inputsCounts = 0;
		var gridIndexToParent = grid.index();
		var inputs;

		while (inputsCounts == 0 && !gridParent.hasClass("ui-bizagi-wp-project-plan-content-dashboard")){
			//moving up in the hierachy tree
			grid = grid.parent();
			gridParent = grid.parent();
			gridIndexToParent = grid.index();
			if(gridIndexToParent > 0 && inputsCounts == 0){
				var auxIndex;
				for (auxIndex = gridIndexToParent-1; auxIndex >= 0 && inputsCounts == 0 ; auxIndex--){
					inputs =  gridParent.children().eq(auxIndex).find("input");
					inputsCounts = inputs.length;
					if (inputsCounts > 0 ){
						inputFoundIndexToParent = auxIndex;
					}
				}
			}
		}

		//Find last input before the grid
		if (inputsCounts > 0){
			
			lastInputBefore = inputs[inputsCounts-1];
			$(lastInputBefore).keydown(function(e) {
				var code = e.keyCode || e.which;
				if (code == '9') {
					e.preventDefault();
					grid.find('.ui-bizagi-grid-buttons').find('li[data-action="add"]').trigger('click');
				}
			});

		}else if (inputsCounts == 0){

		}
	}
}

function clickOnField(){

	var fields = document.getElementsByClassName("ui-selectmenu-value");

	if (undefined !== fields[0]){
		fields[0].click();
	}

	$(fields[0]).keydown(function(e) {
	   console.log('keyup called');
	   var code = e.keyCode || e.which;
	   if (code == '9') {
		 tabToAddInTable();
		 alert('Tab pressed');
	   return false;
	   }
	});
}

function tabToAddInTable(){
	$($(".ui-bizagi-grid-buttons")[0]).eq(0).eq(0).trigger("click");
}