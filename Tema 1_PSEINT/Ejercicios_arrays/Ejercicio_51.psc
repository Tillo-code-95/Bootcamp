Algoritmo Ejercicio_51
	
//Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un
//número primo si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo).
	
	Definir N , i Como Entero;
	Definir es_primo Como Logico;
	
	Escribir " Introduce un numero, para comprobar si es primo ";
	Leer N;
	
	
	
	es_primo = Verdadero;
	Para i = 2 hasta N - 1 Con Paso  1 Hacer
		
		Si N mod i == 0 Entonces
			es_primo = Falso;
			
		FinSi
		
		
	FinPara
	
	Si es_primo Entonces
		
		Escribir " el numero es primo";
		
	SiNo
		
		Escribir " el numero NO es primo";
		
	FinSi
	
	
	
	
FinAlgoritmo
