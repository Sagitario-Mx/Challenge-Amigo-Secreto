// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoEntrada;
let arrayAmigos = [];
let amigoIngresarLista;
let sorteo = 0;
let regexpatron=/^[A-ZÁÉÍÓÚÑü]+$/i;

function agregarAmigo(){
	amigoEntrada=document.getElementById("amigo").value; //Accedemos al valor tecleado en el imput
	let pasa = true;
	pasa = validar(amigoEntrada);
	if(arrayAmigos.includes(amigoEntrada)) {
		alert("Ese nombre ya lo ingresaste");
	}
	else {
		if (pasa == true){
			console.log("Se clickeo añadir");
			console.log(" Se insertara el amigo: " + amigoEntrada);
			arrayAmigos.push(amigoEntrada);	//Introducimos el nombre tecleado al arreglo de amigos 
			console.log("Hasta ahora la Lista de amigos es:");
			console.log(arrayAmigos);
			let ulLista = document.getElementById("listaAmigos");
			let nuevoLi=document.createElement("li");
			nuevoLi.textContent = amigoEntrada;
			ulLista.appendChild(nuevoLi);
			document.getElementById("amigo").focus();
		}		
	} 
}
	
function sortearAmigo(){
	if (arrayAmigos.length > 0) {
	let indicealeatorio = Math.floor(Math.random()* (arrayAmigos.length));
	let amigoSorteado = arrayAmigos[indicealeatorio]; 
		console.log("Se clickeo Sortear Amigo");
		console.log(arrayAmigos);
		console.log("Indice aleatorio: " + indicealeatorio + " posicion en arrayAmigos["+indicealeatorio+"]");
		console.log("El amigo sorteado es: " + amigoSorteado + " entre los amigos ==== "+ arrayAmigos);
		if (sorteo == 0){
			let ulLista = document.getElementById("resultado");
			let nuevoLi=document.createElement("li");
			nuevoLi.textContent = "Amigo Secreto " + amigoSorteado;
			ulLista.appendChild(nuevoLi);
			sorteo++;
		}	
		else {
			let primerLiEnLista = document.querySelector("#resultado > li");
			primerLiEnLista.textContent =  "Amigo Secreto " + amigoSorteado;
		}
	limpiarEntrada();	
	posionaCursor();
	}
	else{
		 alert('No has ingresado el nombre de algún amigo!');	
	}
}


function validar(cadenaValidar) {

	if (cadenaValidar.length > 0 && regexpatron.test(cadenaValidar)) {
		limpiarEntrada();
		posionaCursor();
		return true;
	} 
	else {
		alert('Nombre invalido, contiene caracteres diferentes a letras!');
		limpiarEntrada();
		posionaCursor();
		return false;	 
	}
}
function limpiarEntrada(){
		document.getElementById("amigo").value ="";
}
function posionaCursor(){
	document.getElementById("amigo").focus();

}


