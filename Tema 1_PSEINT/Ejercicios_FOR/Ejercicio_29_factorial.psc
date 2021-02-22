Algoritmo sin_titulo
	//Desarrollar una calculadora de factoriales para números introducidos por teclado.
	//El factorial de un número N es la multiplicación de todos los números desde 1 hasta N. Es decir,
	//para N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120
	
	Definir contador , N , factorial Como Real;
	Escribir " Introduzca un numero " ;
	Leer N ;
	
	factorial = 1;
	
	Para contador = 1 Hasta N Con Paso 1 Hacer
		factorial = factorial * contador;
	Fin Para
	
	Escribir " Factorial de " , N , " sera : " , factorial;

FinAlgoritmo
