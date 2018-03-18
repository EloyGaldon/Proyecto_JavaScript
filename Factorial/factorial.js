var N=prompt('Introduce el número del que quieres conocer su factorial');

num=parseInt(N)
var factorial=num;

for(var i=num-1;i>0;i--){
	factorial=factorial*i;
}

alert("El numero introducido es "+N+" y su factorial es : "+factorial);