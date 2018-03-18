var N=prompt('Introduce un número entero');
var i=prompt('Introduce un número del 1 al 10');

if(N<0 || i<0){
	alert('no se admiten números negativoso')
}
else{
	if(i>N.length)
		alert( '-1' );
	else{
		var array=Array.from(N);
		var invertida = array.reverse(); 
		var iésima=i-1;

		alert(invertida[iésima]);

	}
}