var array=[2,'a',4,5,1,'a','c','c','a',3,6,'a'];
var repetido="";
var contadorMaximo=2;

for(var i=0;i<array.length;i++){
	var contador=1;
	for(j=i+1;j<array.length;j++){
			if(array[i]===array[j]){
				contador++;
			}
	}
	if(contador>contadorMaximo){
		repetido=array[i];
		contadorMaximo=contador;
	}

}


var mensaje="Dada la array=[2,'a',4,5,1,'a','c','c','a',3,6,'a']";
mensaje+=" \n el elemento que mas se repite es \n";
mensaje+=repetido+" que se repite "+contadorMaximo+" veces";
document.getElementById('resultados').value=mensaje;