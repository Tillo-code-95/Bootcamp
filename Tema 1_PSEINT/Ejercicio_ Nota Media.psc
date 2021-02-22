Algoritmo Ejercicio_9
	Definir N1 , N2 , N3 , N4 ,N5, Nota_media Como real;
	Leer N1, N2 ,N3 ,N4 , N5;
	Nota_media = ( N1 + N2 + N3+ N4 + N5) / 5 ;
	Escribir " la nota media es  " , Nota_media;
	
	Si Nota_media >= 5 Entonces
		Escribir " Has aprobado con un " , Nota_media ;
	SiNo 
		Si Nota_media <= 5
			Escribir  " Ha suspendido con un " , Nota_media ;
		FinSi
	FinSi
	
FinAlgoritmo
