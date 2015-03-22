

//Decode html contents from the email body 
function decodeHtml(html){
	//Make an array with all subjects + extra stuff in the html code
	var splitter = "<td colspan=3D\"10\"><b><code> ";
	var splitted = html.split(splitter);
	var subjects = new Array();
	var temp;
	for (var i = 1; i < splitted.length; i++) {
		temp = splitted[i].split(" ", 1);
		subjects.push(temp[0]);
	};
	console.log(html);
	console.log(subjects);
}


function callDecode(){
	//For debugging purposes
	decodeHtml("<td colspan=3D\"10\"><b><code> hola probando askjdfkjafnjl asdjhfkahsdfkj <td colspan=3D\"10\"><b><code> esta es otra prueba");
}
