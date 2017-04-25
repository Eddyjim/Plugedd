var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

//getFirstSelectBox();

$(".process").click(function(){
		console.log("executed append");
		getFirstSelectBox();
	});

function getFirstSelectBox(){
	
	/*ui-selectmenu-value*/
	var x = document.getElementsByClassName("ui-selectmenu-value");
	var i;
	x[0].click();
	
}
