Algoritmo Ejemplo_bubble_
	
	Definir array , tamano , aux , indice , i , j Como Entero;
	tamano = 5;
	Dimension array[tamano];
	
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	Para indice = 0 hasta tamano -1 Hacer
		
		Escribir array[indice], " " Sin Saltar;
		
	FinPara
	escribir " ";
	Para i = 0 Hasta tamano - 2 Hacer // se crean 2 variables nuevas 
		// Envia el numero mayor al final.
	 Para j = 0 hasta tamano -2 Hacer
		Si array[j] > array[j+1] Entonces
			aux = array[j];
			array[j] = array[j+1];
			array[j+1] = aux;
		FinSi
	 FinPara
	
	FinPara
	
	
	// Para verlo por consola
	Para indice = 0 hasta tamano -1 Hacer
		
		Escribir array[indice], " " Sin Saltar;
		
	FinPara
	escribir " ";
	
	
FinAlgoritmo
