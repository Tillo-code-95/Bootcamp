Algoritmo sin_titulo
	
	Definir horas , segs , minutos Como Entero;
	
	segs = 0;
	minutos = 0;
	
	Mientras Verdadero Hacer
		Limpiar Pantalla;
		
		
		Escribir horas ": " minutos ": " segs;
		
		
		Esperar 1 Segundos;
		
		
		segs = segs + 1;
		
		Si segs > 59 Entonces
			segs = 0;
			minutos = minutos + 1;
			
		FinSi
		
		si minutos > 59 Entonces
			minutos= 0;
			horas = horas +1;
		FinSi
		
		
		Si horas > 23 Entonces
			Horas = 0;
			Horas = Horas + 1;
		FinSi
		
	FinMientras
	
	
	
	
	
	
FinAlgoritmo
