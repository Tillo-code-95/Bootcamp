Algoritmo sin_titulo
//	Definir num_aleatorio , intento Como Entero;
//	
//	num_aleatorio = Aleatorio ( 1 , 10);
//	
//	Repetir
//		Escribir " Introduce un numero entre 1 y 10";
//		
//		Leer intento;
//		
//	Mientras Que intento <> num_aleatorio
//	
	// b) Aumentar el limite superior a 100 y anadir una ayuda al usuario:
	// escribir si el numero es mayor o menor que la lectura.
	
	
	Definir num_aleatorio , intento Como Entero;
	
	num_aleatorio = Aleatorio( 1 , 100 );
	
	Repetir
		Escribir " Introduce un numero del 1 al 100 ";
		Leer intento;
		
		si num_aleatorio > intento Entonces
			Escribir " Lo siento el numero introducido es mayor al numero aleatorio ";
		FinSi
		
		Si num_aleatorio < intento Entonces
			
			Escribir " lo siento el numero es menor al aleatorio ";
			
		FinSi
		
		
		
	mientras que intento <> num_aleatorio;
	
	Escribir " Enhorabuena acertaste el numero ";
	
FinAlgoritmo
