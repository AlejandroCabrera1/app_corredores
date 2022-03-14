function caracter(){
	var nombre=document.getElementsByTagName("input")[0];
	if (nombre.value.length<4) {
		nombre.style.color="red";
	}
	else{
		nombre.style.color="black";
	}
}

function validar(){
	var email=document.getElementsByTagName("input")[1];
	if(ValidacionEmail(email.value)){
		email.style.color="black";
	}
	else{
		email.style.color="red";
	}
}


function ValidacionEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
	    return (true);
	}
    
  	return (false);
}

var cont=0;

function Correr(){
	if (cont<1){
		var input_nuevo=document.createElement("input");
		input_nuevo.type="number";
		input_nuevo.id="kms"
		input_nuevo.placeholder="Introduce la distancia";
		var padre=document.getElementById("campo_input").appendChild(input_nuevo);
	}
	cont=cont+1;
}

function noCorrer(){
	var input_nuevo=document.getElementById("kms");
	input_nuevo.parentNode.removeChild(input_nuevo);
	cont=0;
}

function enviar(){
	var valor_nombre=document.getElementsByTagName("input")[0].value;
	var valor_email=document.getElementsByTagName("input")[1].value;
	var correr=document.getElementsByName("correr");
	var hacorrido=correr[0].checked;
	var nohacorrido=correr[1].checked;
	if (hacorrido) {
		var valor_km=document.getElementById("kms").value;
		alert("Te llamas "+valor_nombre+", con email "+valor_email+" y has corrido carreras de "+valor_km+" km");
	}
	if (nohacorrido){
		alert("Te llamas "+valor_nombre+", con email "+valor_email);
	}
}