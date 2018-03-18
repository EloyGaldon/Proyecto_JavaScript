var opcionMaquina="";
var jugador="";
var jugadaJugador="";
var victoriasMaquina=0;
var victoriasJugador=0;
var mensage="";
var tuJugada="";
var maquinaJugada="";


jugar();

function jugar(){
	opcionMaquina=Math.floor(Math.random() * (3 - 0)) + 1;	
	jugador=prompt('introduce tu jugada, introduce fin para salir');

	if(jugador.toUpperCase()=='FIN'){

		mensage="Vuelve a intentarlo mas tarde\n\n";
		mensage+="Maquina : "+victoriasMaquina+"\n";
		mensage+="Tu : "+victoriasJugador+"\n";
		document.getElementById('resultados').value= mensage;	
	}
	else{
		comprobacion(jugador);
	}
}


function comprobacion(opcion){

	jugador = opcion.toUpperCase();
	
	if(jugador!='PIEDRA' && jugador!='PAPEL' && jugador!='TIJERA'){
			alert('Te recuerdo que las opciones validas son : piedra , papel o tijera');
			jugar();
	}
	else{
		switch(jugador){
			case 'PIEDRA':
				jugadaJugador=1
				break;
			case 'PAPEL':
				jugadaJugador=2
				break;
			case 'TIJERA':
				jugadaJugador=3
				break;
		} 
	}

	tuJugada=jugador;
	
	switch(opcionMaquina){
			case 1:
				maquinaJugada='PIEDRA'
				break;
			case 2:
				maquinaJugada='PAPEL'
				break;
			case 3:
				maquinaJugada='TIJERA'
				break;
			}


	if(jugadaJugador==1&&opcionMaquina==1){
			mensage="Empate, vamos otra vez\n\n";
			mensage+="Tu jugada: "+tuJugada+"\n"+"La jugada de la maquina: "+maquinaJugada+"\n\n";
			mensage+="Maquina : "+victoriasMaquina+"\n";
			mensage+="Tu : "+victoriasJugador+"\n";
			document.getElementById('resultados').value= mensage;		
	}
	if(jugadaJugador==1&&opcionMaquina==2){
			victoriasMaquina++;

			mensage="Tu pierdes, vamos otra vez\n\n";
			mensage+="Tu jugada: "+tuJugada+"\n"+"La jugada de la maquina: "+maquinaJugada+"\n\n";
			mensage+="Maquina : "+victoriasMaquina+"\n";
			mensage+="Tu : "+victoriasJugador+"\n";
			document.getElementById('resultados').value= mensage;
	}
	if(jugadaJugador==1&&opcionMaquina==3){
			victoriasJugador++;

			mensage="Tu ganas, vamos otra vez\n\n";
			mensage+="Tu jugada: "+tuJugada+"\n"+"La jugada de la maquina: "+maquinaJugada+"\n\n";
			mensage+="Maquina : "+victoriasMaquina+"\n";
			mensage+="Tu : "+victoriasJugador+"\n";
			document.getElementById('resultados').value= mensage;
	}
	if(jugadaJugador==2&&opcionMaquina==1){
			victoriasJugador++;

			mensage="Tu ganas, vamos otra vez\n\n";
			mensage+="Tu jugada: "+tuJugada+"\n"+"La jugada de la maquina: "+maquinaJugada+"\n\n";
			mensage+="Maquina : "+victoriasMaquina+"\n";
			mensage+="Tu : "+victoriasJugador+"\n";
			document.getElementById('resultados').value= mensage;//jugar();
	}
	if(jugadaJugador==2&&opcionMaquina==2){
			mensage="Empate, vamos otra vez\n\n";
			mensage+="Tu jugada: "+tuJugada+"\n"+"La jugada de la maquina: "+maquinaJugada+"\n\n";
			mensage+="Maquina : "+victoriasMaquina+"\n";
			mensage+="Tu : "+victoriasJugador+"\n";
			document.getElementById('resultados').value= mensage;
	}
	if(jugadaJugador==2&&opcionMaquina==3){
			victoriasMaquina++;

			mensage="Tu pierdes, vamos otra vez\n\n";
			mensage+="Tu jugada: "+tuJugada+"\n"+"La jugada de la maquina: "+maquinaJugada+"\n\n";
			mensage+="Maquina : "+victoriasMaquina+"\n";
			mensage+="Tu : "+victoriasJugador+"\n";
			document.getElementById('resultados').value= mensage;
	}
	if(jugadaJugador==3&&opcionMaquina==1){
			victoriasMaquina++;

			mensage="Tu pierdes, vamos otra vez\n\n";
			mensage+="Tu jugada: "+tuJugada+"\n"+"La jugada de la maquina: "+maquinaJugada+"\n\n";
			mensage+="Maquina : "+victoriasMaquina+"\n";
			mensage+="Tu : "+victoriasJugador+"\n";
			document.getElementById('resultados').value= mensage;
	}
	if(jugadaJugador==3&&opcionMaquina==2){
			victoriasJugador++;

			mensage="Tu ganas, vamos otra vez\n\n";
			mensage+="Tu jugada: "+tuJugada+"\n"+"La jugada de la maquina: "+maquinaJugada+"\n\n";
			mensage+="Maquina : "+victoriasMaquina+"\n";
			mensage+="Tu : "+victoriasJugador+"\n";
			document.getElementById('resultados').value= mensage;//jugar();
	}
	if(jugadaJugador==3&&opcionMaquina==3){
			mensage="Empate, vamos otra vez\n\n";
			mensage+="Tu jugada: "+tuJugada+"\n"+"La jugada de la maquina: "+maquinaJugada+"\n\n";
			mensage+="Maquina : "+victoriasMaquina+"\n";
			mensage+="Tu : "+victoriasJugador+"\n";
			document.getElementById('resultados').value= mensage;
	}
}

