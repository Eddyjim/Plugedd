//Add behavior on the process menues when clicking on menu "new case"
$('#menuListNew').children('a')[0].addEventListener('click',function(){

	$(document).ajaxComplete(function() {
		newCaseListener();
	});

},false);

//Add behavior of FirstSelectBox when a new case is created
function newCaseListener(){	
	$('.process').click(function(){
		getFirstSelectBox();
	});
}
//click the first input text after all the executions 
function getFirstSelectBox(){
	$(document).ajaxComplete( function() {
		$($($('#ui-bizagi-wp-project-plan-content-dashboard')[0]).find('.ui-bizagi-container-form').find('input')[0]).trigger('click');
		setTabEvent();
	});
}

function setTabEvent(){

	//ui-dialog is the class used for the pop-up dialog in Bizagi
	//ui-bizagi-wp-project-plan-content-dashboard is the DOM ID assigned to the main dashboard for forms in Bizagi
	var dashboard = $('#ui-bizagi-wp-project-plan-content-dashboard, .ui-dialog');
	
	//.ui-bizagi-grid is the class used in all grids in Bizagi
	var grid = dashboard.find('.ui-bizagi-grid');

	if (grid.length > 0){ //If any grid in the form
		var gridParent = grid.parent();  //Get Parent Element
		var lastInputBefore;
		var inputFoundIndexToParent;
		var inputsCounts = 0; //Initialize inputs in forms as a 0 value
		var gridIndexToParent = grid.index(); //Gets The position of the grid to the relative paret
		var inputs;

		//While there is no input:text in the children elements of the parent, move up
		while (inputsCounts == 0 && !gridParent.hasClass('ui-bizagi-wp-project-plan-content-dashboard') ){
			if(gridIndexToParent > 0){
				var auxIndex; 
				//Iterate over all the children elements of the relative parent of the grid where the relative position is first than the grid
				for (auxIndex = gridIndexToParent; auxIndex >= 0 && inputsCounts == 0 ; auxIndex--){
					inputs =  gridParent.children().eq(auxIndex).find('input:text'); //Find all input:text in the parents
					inputsCounts = inputs.length;
					
					if (inputsCounts > 0 ){
						inputFoundIndexToParent = auxIndex; //Get the index of the previous child element that contains an input:text within the grid parent element
					}
				}
			}
			//if there is no inputs inside the grid parent element, then move up in the document
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
