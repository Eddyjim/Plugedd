var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

$.fn.exists = function () {
    return this.length !== 0;
}

$("#menuListNew").children('a')[0].addEventListener('click',function(){

	$(document).ajaxComplete(function() {
		newCaseListener();
	});

},false);

function newCaseListener(){	
	$(".process").click(function(){
		console.log("executed append");
		getFirstSelectBox();
	});
}

function getFirstSelectBox(){
	$(document).ajaxComplete( function() {
		$($($("#ui-bizagi-wp-project-plan-content-dashboard")[0]).find(".ui-bizagi-container-form").find("input")[0]).trigger("click");
		setTabEvent();
	});
}

function setTabEvent(){

	var dashboard = $("#ui-bizagi-wp-project-plan-content-dashboard, .ui-dialog");
	//.ui-bizagi-grid //.ui-bizagi-grid-wrapp	er
	//ui-dialog ui-widget ui-widget-content ui-corner-all ui-front
	
	var grid = dashboard.find(".ui-bizagi-grid");

	if (grid.length > 0){

		var gridParent = grid.parent();
		var lastInputBefore;
		var inputFoundIndexToParent;
		var inputsCounts = 0;
		var gridIndexToParent = grid.index();
		var inputs;

		while (inputsCounts == 0 && !gridParent.hasClass("ui-bizagi-wp-project-plan-content-dashboard") && !grid.hasClass('ui-dialog')){
			//moving up in the hierachy tree
			if(gridIndexToParent > 0){
				var auxIndex;
				for (auxIndex = gridIndexToParent-1; auxIndex >= 0 && inputsCounts == 0 ; auxIndex--){
					inputs =  gridParent.children().eq(auxIndex).find("input:text");
					inputsCounts = inputs.length;
					inputs.css("border-style","solid");
					inputs.css("border-color","blue");
					inputs.css("color","blue");
					if(inputs.parents('ui-dialog').lenght > 0){
						console.log("inputsCounts: " + inputsCounts);
						console.log("auxIndex: " + auxIndex);
						console.log("containerClass: " + gridParent.children().eq(auxIndex).attr("class"));
					}
					if (inputsCounts > 0 ){
						inputFoundIndexToParent = auxIndex;
						if(inputs.parents('ui-dialog').lenght > 0){
						console.log("inputFoundIndexToParent: " + inputFoundIndexToParent);
						}
					}
				}
			}
			
			if (inputsCounts == 0){
				console.log("moving up in tree");
				grid.css("border-style", "solid");
				grid.css("border-color", "yellow");
				grid = gridParent;
				gridParent = grid.parent();
				gridIndexToParent = grid.index();
				grid.css("border-style", "solid");
				grid.css("border-color", "red");
				gridParent.css("border-style", "solid");
				gridParent.css("border-color", "green");
			}
			if (inputs != undefined){
				if(inputs.parents('ui-dialog').lenght > 0){
					console.log("grid / must be ui-bizagi-container  ui-bizagi-container-contentpanel - " + grid.attr("class"));
					console.log("gridParent / must be ui-bizagi-container ui-bizagi-container-form ui-widget-content  ui-bizagi-rendering-mode-execution - " + gridParent.attr("class"));
					console.log("gridIndexToParent: " + gridIndexToParent + " child class: " + gridParent.children().eq(gridIndexToParent).attr("class"));
					console.log("inputs found: "+inputsCounts);
				}
			}
		}
		
		//Find last input before the grid
		if (inputsCounts > 0){
			if(inputs.parents('ui-dialog').lenght > 0){
				console.log("input Found");
			}
			lastInputBefore = $(inputs[inputsCounts-1]);
			lastInputBefore = inputs[inputsCounts-1];

			$(lastInputBefore).keydown(function(e) {
				var code = e.keyCode || e.which;
				if (code == '9') {
					e.preventDefault();
					console.log('pressed tab');
					grid.find('.ui-bizagi-grid-buttons').find('li[data-action="add"]').trigger('click');
				}
				e.stopImmediatePropagation();
			});

		}
	}
}

function tabToAddInTable(){
	$($(".ui-bizagi-grid-buttons")[0]).eq(0).eq(0).trigger("click");
}