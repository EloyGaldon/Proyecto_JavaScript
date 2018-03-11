var cifra="";
/*
function prueba(element){
	alert("te esta mandando "+element);
}
*/
function display_numeros(numero){

	document.getElementById('display').value=cifra+numero;
	cifra=document.getElementById('display').value;
}

function suma(){
	cifra2=document.getElementById('display').value;
	cifra="";
	operador=0;
}

function resta(){
	cifra2=document.getElementById('display').value;
	cifra="";
	operador=1;
}

function muti(){
	cifra2=document.getElementById('display').value;
	cifra="";
	operador=2;
}

function div(){
	cifra2=document.getElementById('display').value;
	cifra="";
	operador=3;
}

function equal(){
	switch(operador)
	{
  	case operador=0: 
  		document.getElementById('display').value=parseFloat(cifra2)+parseFloat(cifra);
  		break;
  	case operador=1:
  		document.getElementById('display').value=parseFloat(cifra2)-parseFloat(cifra);
  		break;
  	case operador=2: 
  		document.getElementById('display').value=parseFloat(cifra2)*parseFloat(cifra);
  		break;
  	case operador=3:
  		document.getElementById('display').value=parseFloat(cifra2)/parseFloat(cifra);
  		break;
 
	}
	
}

function reset(){
	cifra="";
	cifra2="";
	operador="";
	document.getElementById('display').value=0;
}
