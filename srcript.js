var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

getFirstSelectBox();

function getFirstSelectBox(){
	
	/*ui-selectmenu-value*/
	
	var x = document.getElementsByClassName("ui-bizagi-render-control");
	var i;
	console.log("entered")
	/*x[0].click();*/
	for ( i = 0 ; i < x.length; i++){
		x[i].click();
	}
}
