var ciudad=prompt('Introduce la ciudad donde quieres conocer los creditos a convalidar');

ciudad=ciudad.toLowerCase();

switch(ciudad){

case "madrid":
case "murcia":
		alert('se convalidarán 30 créditos');
		break;
case "alicante":
		alert('No se convalidan créditos');
		break;
case "valencia":
case "granada":
case "cordoba":
		alert('Se convalidan 50 créditos');
		break;
default:
		alert('Te recuerdo que las opciones disponibles son:\nMadrid, Murcia, Alicante, Valencia, Granada y Cordoba');
		}