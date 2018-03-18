var nombre=prompt('introduce tu nombre');
var apellido=prompt('introduce tu apellido');

let persona = (valor1, valor2) => valor1+" "+valor2;

 document.getElementById('nombre').value=persona(nombre,apellido);