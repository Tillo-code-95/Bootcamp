Algoritmo Ejercicio_50
//Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que
	//introduciremos por teclado.
	
	Definir letra , frase Como Caracter;
	Definir indice , contador Como Entero;	
	contador = 0;
	
	Escribir " Introduce una frase ";
	Leer frase;
	Escribir " Introduce una letra";
	Leer letra;
	
	Para indice = 0 hasta Longitud(frase) - 1 con paso 1 Hacer
		

	
	  Si Subcadena(frase , indice ,indice) == letra Entonces
		
		contador = contador + 1;
		
	  FinSi
	
  FinPara
  
  Escribir " La letra " , letra  " aparece " , contador , " veces";
	
FinAlgoritmo
	