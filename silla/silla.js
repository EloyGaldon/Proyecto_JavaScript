var a=prompt("Introcuce la altura de la silla");
var z=0;
var i=0;
var j=0;

document.getElementById('display').value="";
        do{
            var v="\n";
            document.getElementById('display').value+=v;
            z++;
        }while(z<3)
        do{
            var valor=("   "+"X"+"\n");
            document.getElementById('display').value+=valor;
            i++;
        }while(i<a/2)

        var valor2="   "+"XXXXX"+"\n";
        document.getElementById('display').value+=valor2;
            //console.log("XXXX");

        do{
            var valor3="   "+"X   X"+"\n";
            document.getElementById('display').value+=valor3;
            //console.log("X  X");
            j++;
        }while (j<a/2)
