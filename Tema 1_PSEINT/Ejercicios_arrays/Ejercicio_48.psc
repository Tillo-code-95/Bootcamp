Algoritmo Ejercicio_48
	
//	Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
//	datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
//	Pista: Los datos alfanuméricos (strings) también se pueden comparar con los operadores < y >.
	
	Definir  i , j ,contador, tamano Como Entero;
	Definir nombre , nombres ,aux Como caracter;
	
	tamano = 1000;
	Dimension nombres[tamano];
	
	contador = 0;
	
	Repetir
		
		Escribir " Introduce un nombre , dejalo vacio para acabar ";
		Leer nombre;
		
		Si nombre <> "" Entonces
			
			nombres[contador] = nombre;
			contador = contador + 1; 
			
			
		FinSi
		
		
		
	Mientras Que nombre <> ""
	
	
	Para i = 0 Hasta contador - 2 Con Paso 1 Hacer
		
		para j = 0 Hasta contador -2 Con Paso 1 Hacer
			
			Si nombres[j] > nombres[j + 1] Entonces
				
				aux= nombres[j];
				nombres[j] = nombres[j+1];
				nombres[j+1] = aux;
				
				
			FinSi
			
		FinPara
		
	FinPara
	
	Para i = 0 Hasta contador - 1 Hacer
		Escribir nombres[i] , " " Sin Saltar;
		
	FinPara
	
	
	
	
	
	
	
FinAlgoritmo
