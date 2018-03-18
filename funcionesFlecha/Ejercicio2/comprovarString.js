var texto="una palabra o texto";
var numero=123;

document.getElementById('texto').value=texto;
document.getElementById('numero').value=numero;

let comprovacion=(valor1)=> typeof(valor1);

document.getElementById('comprovacion').value=comprovacion(texto);
document.getElementById('comprovacion2').value=comprovacion(numero);