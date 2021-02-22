Algoritmo ejercicio_24
	
	Definir nombre Como Caracter;
	
	Definir nota_final , practica , problema , teoria Como Real;
	
	Escribir " Introduce tu nombre ";
	Leer nombre;

	Mientras nombre <>  "" Hacer
		
		Escribir " Introduzca sus notas ";
		Leer practica , problema , teoria ;
	
	Si ( practica >= 0 y practica <= 10) y (problema >= 0 y problema <= 10 ) y (teoria >= 0 y teoria <= 10 ) Entonces
		
		nota_final = practica * 0.1 + problema * 0.5 + teoria * 0.4 ;
		Escribir " Tu nota final es de " , nota_final ;
	SiNo
		Escribir " Las notas no son correctas ";
	FinSi
	
	Escribir " Introduzca un nombre ";
	Leer nombre;
	
	
	FinMientras
	
FinAlgoritmo
