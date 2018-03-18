    /*

    let operacion=(opciones=>' ${opciones}')("");

    prompt(operacion);
    */

    var a=prompt("Introduce el primer valor");

    var op=prompt("Introduce el simbolo de la operacion a realizar \n Opciones: \n Suma: + \n Resta: -  \n Multiplicacion: * \n Division: /")

    var b=prompt("Introduce el segundo numero");

    switch(op){
    case "+":
            let suma=(valor1, valor2) => valor1+valor2;
            document.getElementById('display').value=suma(parseInt(a),parseInt(b));
            break;
    case "-":
            let resta=(valor1, valor2) => valor1-valor2;
            document.getElementById('display').value=resta(parseInt(a),parseInt(b));
            break;
    case "*":
            let multi=(valor1, valor2) => valor1*valor2;
            document.getElementById('display').value=multi(parseInt(a),parseInt(b));
            break;
    case "/":
            let div=(valor1, valor2) => valor1/valor2;
            document.getElementById('display').value=div(parseInt(a),parseInt(b));
            break;
    }


