Algoritmo Ejercicio_18
	
	Definir contador , N , Numero_inicial, suma Como Entero;
	Escribir " valor inicial ";
	Leer N;
	
	Numero_inicial = N;
	Contador = 0;
	suma = 0;
	
	Escribir  " Escribir N ";
	Leer N;
	
	
	
	Si Numero_inicial mod 2 <> 0 Entonces
		Numero_inicial= Numero_inicial +1 ;
	FinSi
	
	contador = 0;
	Mientras  contador < N Hacer
		
		Escribir Numero_inicial;
		
		Numero_inicial = Numero_inicial + 2;
		
		contador = Contador + 1;
	FinMientras
	
FinAlgoritmo
