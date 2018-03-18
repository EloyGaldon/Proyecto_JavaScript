var array=[];
var contador=0;
var max="";
var min="";
var suma=0;

function Insert(event)
{
  array[contador]=document.getElementById('numero').value;
  contador++;
}

function Tester(event){
	for(var i=0;i<array.length;i++) {
		if(min ==""){
			min=array[i];
		}
		else{
			if(array[i]>max)
				max=array[i];
			else{
				if(array[i]<min){
					min=array[i];
				}
			}

		}
		suma+=parseInt(array[i]);

	}
	var promedio=suma/array.length;

	// Muestra de datos (mediante alert)

	alert("Valor maximo introducido : "+max);
	alert("Valor minimo introducido : "+min);
	alert("La suma de todos los num introducidos es : "+suma);
	alert("El promedio de los numeros introducidos es : "+promedio);
}

document.getElementById('insertNum').onclick = Insert;
document.getElementById('ejecutar').onclick = Tester;