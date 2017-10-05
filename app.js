
function cifradoCesar(option){ // Función completa del proframa...
	do{ // Primero preguntar al usuario que desea hacer con el programa.
	  	var action = prompt("Indique la opción que desea ejecutar: 1)Cifrar - 2)Desifrar");
		if(action !== ""){
		  			if(action == "1") {
				cipher();
			} else if (action == "2") {
				decipher();
			} else {
				alert("Ingrese una opción válida"); // Si el usuario ingresa un número != 0 o !=1 o un espacio vacío se aplica un alert.
			}
		}
	} while (action === "" || (action != "1" && action != "2"));


function cipher() { // Cuando el usuario aplica action == 1, se emplea esta función.

  	var str=prompt('Qué vamos a Ocultar hoy ;) ??'); // Pide al usuario ingresar la frase a codificar

     if(str.length === 0){ // Comrpueba que la frase no sea un campo vacío
     return 'Ingrese texto';
   }
	var output = ''; // Creamos una variable se salida de resultado.
  
	for (var i = 0; i < str.length; i ++) { // Recorriendo cada posición de la frase ingresada.
		
		var c = str[i]; // Se obtiene un array con cada posición de la frase.

    	var patron= /^[a-zA-Z\s]*$/;
		
		if(!c.search(patron)) { // Se comprueba que el nuevo array solo contenga letras.
			
			var code = str.charCodeAt(i); // Se obtiene el número en dotación ASCII.

			// Se compara para aplicar fórmula de mayúsculas o minúsculas
			if ((code >= 65) && (code <= 90)){
				c = String.fromCharCode(((code - 65 + 33) % 26) + 65);

			}else if ((code >= 97) && (code <= 122)){
				c = String.fromCharCode(((code - 97 + 33) % 26) + 97);
		}
      else{  
      return 'Ingrese solo texto';
	}
		output += c;
	}
	// Se muestra el resultado en pantalla.
	} document.write("El resultado es: " + output);
}


 function decipher() {

    var str=prompt("Ingrese el código que desea decodificar");

       if(str.length === 0){

       return "Ingrese información válida.";

   }
	var output2 = '';

	for (var i = 0; i < str.length; i ++) {

		var c = str[i];

	    var patron= /^[a-zA-Z\s]*$/;

		if(!c.search(patron)) {

			var code = str.charCodeAt(i);

			if ((code >= 65) && (code <= 90))

				c = String.fromCharCode((code -(33%26)));

			else if ((code >= 97) && (code <= 122))

				c = String.fromCharCode((code -(33%26)));

		}

      else  

      return 'Ingrese solo texto';

		output2 += c;

	}

	// para mostrarlo

	document.write("Tu Frase es: " +output2);

}
}

cifradoCesar();