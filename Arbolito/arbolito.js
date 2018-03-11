var z=prompt("Introcuce la altura del arbol");
document.getElementById('display').value="";


    var a = "\n"
    var j = 1
    for(var i=0;i<z;i++,j=i+1){

        for(j;j<z;j++) a+=" "

        for(j=0;j<2*i+1;j++) a+="*"

        a+="\n"
    }

    document.getElementById('display').value= a;

    

