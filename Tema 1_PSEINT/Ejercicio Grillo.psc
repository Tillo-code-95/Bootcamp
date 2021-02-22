Algoritmo Ejercicio_Grillo12
	
	Definir Num_sonidos , Temperatura Como Real;
	Escribir " Introduce el numero de sonidos por minuto" ;
	Leer Num_sonidos;
	
	Si Num_sonidos <= 0 Entonces
		Escribir " Hay un error ";
	SiNo
		Temperatura = Num_sonidos / 4 + 40 ;
		Escribir " La temperatura es de " , Temperatura , " Cº " ;
	FinSi
	
	
FinAlgoritmo
