var a=prompt("Introcuce la tabla que quieres mostrar");

document.getElementById('valor').value=a;
document.getElementById('display').value="";

for(var i=0;i<=10;i++){

    var resultado=a*i;

    document.getElementById('display').value+=(" "+a+" X "+i+" = "+resultado+"\n");

}
