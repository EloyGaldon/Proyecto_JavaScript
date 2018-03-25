var inicial=prompt('Introduce el valor inicial');
var longitud=prompt('Introduce el tamaño del array');
var array=new Array();
inicial=parseInt(inicial);
longitud=parseInt(longitud);

array[0]=inicial;

for(var i=1;i<longitud;i++){
	array[i]=inicial+i;
}
var mensaje="Los numeros introducidos son ["+inicial;

for(var j=1;j<longitud;j++){
	mensaje+=", "+array[j];
}
document.getElementById('resultados').value=mensaje+"]";