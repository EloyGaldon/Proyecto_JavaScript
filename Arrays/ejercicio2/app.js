var array1=[1,4,6,7];
var array2=[4,5,8,9];

var array3=array1.concat(array2);

array3.sort();

for (var i=0;i<array3.length;i++){
	if(array3[i]===array3[i+1])
		array3.splice(i,1);
}


var mensaje="Dada la array1=[1,4,6,7] \n y la array2=[4,5,8,9] \n"
mensaje+="\nLos numeros al unirlos son \n\n array3=["+array3[0];

for(var j=1;j<array3.length;j++){
	mensaje+=", "+array3[j];
}
document.getElementById('resultados').value=mensaje+"]";