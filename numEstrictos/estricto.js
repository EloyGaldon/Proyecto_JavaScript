var num=prompt('Introduce un número y te dire si es estricto o no');


	var array=Array.from(num);
	var resultado=0;
	
    while (array[0]==='1' || array[0]==='3' || array[0]==='5') {
        array.splice(0,1);
    }

    for (var i = 0; i < array.length; i++) {

        if (array[i]==='1' || array[i]==='3' || array[i]==='5') {
            resultado+=1;
        }
        
    	else{
    		resultado+=0;
    	}
	}

	if(resultado>0){
		alert('el numero introducido es estricto');
	}
	else{
		alert('el numero introducido no es estricto');
	}




