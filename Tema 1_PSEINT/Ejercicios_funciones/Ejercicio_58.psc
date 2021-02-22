Algoritmo Ejercicio_58

	
	Definir array , tamano_filas , tamano_columnas , filas , columnas ,paginas, tamano_paginas , contador Como Entero;
	
	tamano_filas = 4;
	tamano_columnas = 5;
	tamano_paginas = 3; 
	Dimension array[tamano_paginas ,tamano_filas , tamano_columnas];  // matriz [tamano filas] , [tamano columnas] [tamano_paginas]
	
	contador = 0;
	
	Para paginas = 0 Hasta tamano_paginas - 1 Hacer
		
		Escribir " pagina " , paginas;
		
		Para filas = 0 hasta tamano_filas - 1 Hacer
			
			Para columnas = 0 hasta tamano_columnas - 1 Hacer
				
				array[paginas , filas , columnas] = contador;
				
				Escribir array[paginas , filas , columnas] , " " Sin Saltar;
				
				contador = contador + 1;
				
				
				
			FinPara
			
			Escribir "";
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	
	
	
FinAlgoritmo
