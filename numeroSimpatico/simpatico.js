
var variableRecogida = prompt('Introduce un número y te dire si es simpatico o no');

num=parseInt(variableRecogida);

var numSimpa = num.toString(2)

var array=Array.from(numSimpa);
var contador=0;

 for (var i = 0; i < array.length; i++) {
 	if(array[i]===array[i+1])
 		contador++;
 }

 if (contador<1){
 	document.write("<h1>Enhorabuena el numero introducido es simpatico</h1>");
 	document.write(numSimpa);
 }
 else{
 	document.write("<h1>Lo sentimos el numero introducido no es simpatico</h1>");
 	document.write(numSimpa);
 }
	
