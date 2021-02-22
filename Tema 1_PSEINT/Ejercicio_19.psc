Algoritmo Ejercicio_19
	
	Definir suma, contador,N Como Entero; 
	Definir media Como Real;
	Leer N;
	suma = 0;
	contador  = 0;
	
	Mientras N <> -1 Hacer
		suma = suma + N;
		
		Escribir " introduce un numero ";
		Leer N;
		contador = contador + 1;
		
	FinMientras
	
	media = suma / contador;
	
	Escribir " media es : " , media;
FinAlgoritmo
