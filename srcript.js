var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

$.fn.exists = function () {
    return this.length !== 0;
}

$('#menuListNew').children('a')[0].addEventListener('click',function(){

	$(document).ajaxComplete(function() {
		newCaseListener();
	});

},false);

function newCaseListener(){	
	$('.process').click(function(){
		getFirstSelectBox();
	});
}

function getFirstSelectBox(){
	$(document).ajaxComplete( function() {
		$($($('#ui-bizagi-wp-project-plan-content-dashboard')[0]).find('.ui-bizagi-container-form').find('input')[0]).trigger('click');
		setTabEvent();
	});
}

function setTabEvent(){

	//ui-dialog ui-widget ui-widget-content ui-corner-all ui-front
	var dashboard = $('#ui-bizagi-wp-project-plan-content-dashboard, .ui-dialog');
	
	//.ui-bizagi-grid
	var grid = dashboard.find('.ui-bizagi-grid');

	if (grid.length > 0){

		var gridParent = grid.parent();
		var lastInputBefore;
		var inputFoundIndexToParent;
		var inputsCounts = 0;
		var gridIndexToParent = grid.index();
		var inputs;

		while (inputsCounts == 0 && !gridParent.hasClass('ui-bizagi-wp-project-plan-content-dashboard') && !grid.hasClass('ui-dialog')){
			//moving up in the hierachy tree
			if(gridIndexToParent > 0){
				var auxIndex;
				for (auxIndex = gridIndexToParent-1; auxIndex >= 0 && inputsCounts == 0 ; auxIndex--){
					inputs =  gridParent.children().eq(auxIndex).find('input:text');
					inputsCounts = inputs.length;
					
					if (inputsCounts > 0 ){
						inputFoundIndexToParent = auxIndex;
					}
				}
			}
			
			if (inputsCounts == 0){
				grid = gridParent;
				gridParent = grid.parent();
				gridIndexToParent = grid.index();
			}
		}
		
		//Find last input before the grid
		if (inputsCounts > 0){
			lastInputBefore = $(inputs[inputsCounts-1]);
			lastInputBefore = inputs[inputsCounts-1];

			$(lastInputBefore).keydown(function(e) {
				var code = e.keyCode || e.which;
				if (code == '9') {
					e.preventDefault();
					grid.find('.ui-bizagi-grid-buttons').find('li[data-action="add"]').trigger('click');
				}
				e.stopImmediatePropagation();
			});

		}
	}
}

function tabToAddInTable(){
	$($('.ui-bizagi-grid-buttons')[0]).eq(0).eq(0).trigger("click");
}