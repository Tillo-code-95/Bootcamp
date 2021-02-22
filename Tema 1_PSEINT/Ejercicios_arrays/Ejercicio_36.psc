Algoritmo Ejercicio_36
	Definir tamano , indice , num_aleatorio , my_array, my_array2 , multi Como Entero;
	
	tamano = 10 ;
	
	
	
	Dimension my_array[tamano] ;
	
	Dimension my_array2[tamano];
	
	
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array[indice] = Aleatorio( 1 ,20 ) ;
		
		my_array2[indice] = Aleatorio( 1 ,20 ) ;
		
		multi = my_array[indice] * my_array2[indice];
		
		Escribir " Indice " , indice ": " , my_array[indice] , " * " , my_array2[indice] " = " , multi;
		
		
		
	FinPara
	
	
FinAlgoritmo
