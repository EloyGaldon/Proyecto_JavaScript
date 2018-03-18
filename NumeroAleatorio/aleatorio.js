
var numeroSecret=Math.floor(Math.random() * (100 - 0)) + 1;

var intentos=0;

var numero=prompt('adivina el número aleatorio entre 1 y 100');

document.write('<p>El numero aleatorio era: '+numeroSecret+'</p>');

comprobar();

function comprobar(){

	if(numero.toUpperCase()=='FIN'){
		document.write('<h3>YOU LOSE</h3>');
		document.write('<p>vuelve a intentarlo mas tarde</p>');
	}
	else {
		if(numero==numeroSecret){
			intentos++;
			document.write('<p>Enhorabuena has adivinado el número con : '+intentos+' intentos</p>');
		}
		else	{
			intentos++;
			document.write('<p>Lo sentimos has fallado con ( '+numero+' ) y llevas: '+intentos+' intentos</p>');
				if(numero<numeroSecret){
					alert('Sigue intentandolo, tu número ( '+numero+' ) es menor al aleatorio')
					numero="";
					numero=prompt('adivina el número aleatorio entre 1 y 100');
					comprobar();
				}
				else{
					alert('Sigue intentandolo, tu número ( '+numero+' ) es mayor al aleatorio')
					numero="";
					numero=prompt('adivina el número aleatorio entre 1 y 100');
					comprobar();
				}

		}
	}
}

