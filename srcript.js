var path = 'https://raw.github.com/Eddyjim/Plugbot/master/';

console.log(path);

getFirstSelectBox();

function getFirstSelectBox(){
	
	/*ui-selectmenu-value*/
	
	var x = document.getElementsByClassName("ui-selectmenu-value");
	var i;
	
	/*x[0].click();*/
	for ( i = 0 ; i < x.length ; i++){
		x[i].click();
		console.log("Position: "+i);
	}
}
