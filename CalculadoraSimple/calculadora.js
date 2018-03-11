var a=prompt("Introduce el primer valor");
var b=prompt("Introduce el segundo numero");
var op=prompt("Introduce el simbolo de la operacion a realizar");

switch (op){
    case "+":
        var result=a+op+b;
        document.getElementById('display').value=eval(result);
        //console.log(eval(result));
        break;
    case "-":
        var result=a-b;
        document.getElementById('display').value=eval(result);
        //console.log(eval(result));
        break;
    case "*":
        var result=a*b;
        document.getElementById('display').value=eval(result);
        //console.log(eval(result));
        break;
    case "/":
        var result=a/b;
        document.getElementById('display').value=eval(result);
        //console.log(eval(result));
        break;
}