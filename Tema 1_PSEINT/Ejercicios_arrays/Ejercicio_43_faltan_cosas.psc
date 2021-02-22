Algoritmo sin_titulo
	Definir array , tamano , indice Como Entero;
	tamano = 5;
	Dimension  array[tamano];
	
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	
	Para indice = 0 Hasta tamano - 1 Hacer
		
	
	
	Si array[0] > array[1] Entonces
		
		aux = array[0];
		array[0] = array[1];
		array[1] = aux;
		
	FinSi
	FinPara

	
	// Lo vemos por consola
	Para indice = 0 Hasta  tamano - 1 Hacer
		Escribir  array[indice], " " Sin Saltar;
	FinPara
	Escribir " ";
	
	
	
FinAlgoritmo
