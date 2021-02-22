
funcion resultado = es_primo(num)
	
	definir indice Como Entero;
	definir resultado Como logico;
	resultado = verdadero;
	Para indice = 2 hasta num - 1 Hacer
		si num mod indice == 0 Entonces
			resultado = Falso;
		FinSi
	FinPara
	
FinFuncion




Algoritmo Ejercicio_54
//	Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos menores
	//	que N.
	
	Definir i ,N Como Entero;
	Leer N;
	
	Para i = 2 Hasta N con paso 1 Hacer
		
		si es_primo(i) Entonces
			escribir i " es primo ";
			contador_primos = contador_primos + 1;
		FinSi
		
	FinPara
	Escribir "Antes de " , N , " (incluyendo N ) hay " ,contador_primos, "primos";
	
FinAlgoritmo
