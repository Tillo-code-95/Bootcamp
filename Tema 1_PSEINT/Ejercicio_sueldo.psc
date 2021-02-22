Algoritmo Sueldo_trabajador
	Definir sueldo  Como Entero;
	Escribir " Introduce tu sueldo " ;
	Definir categoria Como Entero;
	Escribir " tu categoria " ;
	Leer sueldo;
	Leer categoria; 
	
	Si categoria==1 Entonces
		Escribir " categoria " , categoria , " Tu nuevo sueldo es " , sueldo * 1.15 ;
		
	FinSi
	
	Si categoria == 2 Entonces
		Escribir " categoria " , categoria , " Tu nuevo sueldo es " , Sueldo * 1.1 ;
		
	FinSi
	
	Si categoria == 3 Entonces
		Escribir " categoria " , categoria , " Tu nuevo sueldo es " , Sueldo * 1.06;
	FinSi
	
	Si categoria == 4 Entonces 
		Escribir  " categoria " , categoria , " tu nuevo sueldo es " , sueldo * 1.03;
	FinSi
	
FinAlgoritmo
