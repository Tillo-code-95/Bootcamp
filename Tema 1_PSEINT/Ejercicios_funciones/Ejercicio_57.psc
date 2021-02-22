Algoritmo Ejercicio_57
	
	Definir matriz , fila , columna , tamano Como Entero;
	tamano= 3;
	Dimension matriz[tamano , tamano];
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	// imprimir la matriz 
	
	Para fila = 0 hasta tamano - 1 Hacer
		Para columna = 0 hasta tamano -1 Hacer
			
			Escribir matriz[fila , columna] , " " Sin Saltar;
			
			
		FinPara
		Escribir " ";
	FinPara 
	
	es_simetrica = Verdadero;
	
	Para fila = 0 hasta tamano -1 Hacer
		Para columna = 0 hasta tamano - 1 Hacer
			
			Si matriz[filas , columnas] <> matriz[columnas , filas ] Entonces
				
				es_simetrica = Falso;
				
			FinSi
			
		FinPara
	FinPara
	Si es_simetrica Entonces
		escribir " Es simetrica";
	SiNo
		Escribir " no es simetrica";
		
	FinSi
	
	
FinAlgoritmo
