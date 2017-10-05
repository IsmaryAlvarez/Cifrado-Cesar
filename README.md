# _Cifrado César_

## Primeros pasos
+ Archivo **README.md**

	- Pseudocódigo

	- Diagrama de flujo

+ Archivo **index.html**

+ Crear un archivo **app.js**

### Ingreso de datos

+ Pedir al usuario que decida entre codificar o decodificar.

+ Si el usuario ingresa un dato distinto a la opciones, o ingresa un espacio vacio recibirá un alert para que ingrese una opción valida.

### Variable Codificar

+ Ingresar frase.

+ Verificar frase: 

	- Sin carácteres vacíos,

	- Sin números;

	- Sin símbolos.

+ Separar el las letras y ubicar su posición en el abecedario.

+ Aplicar a cada posición la fórmula: 

	- Para letras mayúsculas: (((X-65+33) %26 ) + 65);

	- Para letras minúsculas: (((X-97+33) %26 ) + 97).

+ Unir nuevamente la cadena.

+ Devolver Resultado.

### Variable Decodificar 

+ Ingresar frase.

+ Verificar frase: 

	- Sin carácteres vacíos,

	- Sin números;

	- Sin símbolos.

+ Separar el las letras y ubicar su posición en el abecedario.

+ Aplicar a cada posición la fórmula: (x - (33%26));

+ Unir nuevamente la cadena.

+ Devolver Resultado.

#### Este archivo es la versión **0.0.1**

##### Ejecutado por _Ismary Alvarez_



### Diagrama de flujo 

![Diagrama de Flujo] (https://image.ibb.co/cnjurG/Diagrama_de_Flujo.jpg)




