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

function getFirstSelectBox(){
	$(document).ajaxComplete( function() {
		console.log("Ajax executed 2");
		$($($("#ui-bizagi-wp-project-plan-content-dashboard")[0]).find(".ui-bizagi-container-form").find("input")[0]).trigger("click");
		setTabEvent();
		//clickOnField();
	});
}

function setTabEvent(){
	console.log("getting dashboard");
	var dashboard = $("#ui-bizagi-wp-project-plan-content-dashboard")[0];
	
	//ui-bizagi-render
	var grid = $(dashboard).find(".ui-bizagi-grid-wrapper").parent().parent().parent().parent();
	if (grid.length > 0){
		console.log("found grid" + grid);
	
		var gridParent = $(grid).parent();
		var parentChilds = gridParent.children().length;
		console.log("parenChilds: " + parentChilds);
		var lastInputBefore;
		var inputsCounts = 0;
		
		//If the inmeditate parent has another children
		//if (parentChilds > 1){
		
		var gridIndexToParent = gridParent.index(grid);
		console.log("gridIndexToParent: " + gridIndexToParent);
		if (gridIndexToParent == 0){
			console.log("is first element");
			$(grid.find(".ui-bizagi-grid-buttons")[0]).eq(0).eq(0).trigger("click");
		}
		else if(gridIndexToParent > 0){
			console.log("needs tab handler");
			while (inputsCounts == 0){
				//moving up in the hierachy tree
				console.log("moving up in tree");
				grid = grid.parent();
				gridParent = grid.parent();
				gridIndexToParent = gridParent.index(grid);
				inputsCounts = gridParent.eq(gridIndexToParent-1).find("input").length;
			}
			console.log("parent children: "+inputsCounts);
			//Find last input before the grid
			lastInputBefore = gridParent.eq(gridIndexToParent-1).find("input")[inputsCounts-1];	
		}

		/*} else{
			//Get inmediate parent as grid root
			console.log("parent with only the grid");
			grid = $(grid).parent();
			gridParent = $(grid).parent();
			//Get the index of the grid to the relative parent
			
			
			if ($($(grid).parent()).length > 1 && gridIndexToParent != 0){
				inputsCounts = $(gridParent).find("input").length;
				console.log("parent children: "+inputsCounts);
				lastInputBefore = $($($(gridParent).eq(0)).find("input")[inputsCounts-1]);
			}
		}
			*/	
		$(lastInputBefore).keydown(function(e) { 
			var code = e.keyCode || e.which;
			if (code == '9') { 
				e.preventDefault(); 
				console.log("pressed tab");
				$($(grid).find(".ui-bizagi-grid-buttons")[0]).eq(0).eq(0).trigger("click");
			} 
		});	
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