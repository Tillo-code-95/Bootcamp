Algoritmo Ejercicio_55
//	Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100. Imprimirla en
//	forma de matriz o tabla, con sus filas y columnas.
	
	Definir matriz , tamano_filas , tamano_columnas , filas , columnas Como Entero;
	
	tamano_filas = 4;
	tamano_columnas = 5;
	
	Dimension matriz[tamano_filas , tamano_columnas]; // matriz [tamano filas] , [tamano columnas] .
	
	Para filas = 0 hasta tamano_filas - 1 Hacer
		
		Para columnas = 0 hasta tamano_columnas - 1 Hacer
			
				matriz[filas , columnas] = Aleatorio(1 , 100) ;
				
				Escribir matriz[filas ,columnas] , "   " Sin Saltar;
				
			
			
			
		FinPara
		
		Escribir "";
		
	 FinPara
	
	
	
	
FinAlgoritmo
