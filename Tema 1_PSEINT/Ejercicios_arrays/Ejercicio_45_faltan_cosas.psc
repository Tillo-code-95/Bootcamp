Algoritmo Ejercicio_45
	//Teniendo un vector con los numeros naturales que queramos, 
	// meter en otro la misma longitud,
	// aquellos que sean pares y mayores que 25.
	//Despues , mostrar el vector de origen completo y el de destino
	// solo numeros introducidos.
	
	Definir array , tamano , indice , array1 , array2 Como Entero;
	tamano = 10;
	Dimension array1[tamano] , array2[tamano];
	
	Para indice = 0 Hasta tamano - 1 Hacer
		// Rellenar el primer array
		array1[indice] = Aleatorio(1 , 50 );
		Escribir array1[indice] , " " Sin Saltar;
		
		//Rellenar el segundo array
		Si array1[indice] mod 2 == 0 Y array1[indice] > 25 Entonces
			array2[indice] = array1[indice] ;
		SiNo
			array2[indice] = 0;
		FinSi
		
		
	FinPara
	Escribir " ";
	
	
	
	
FinAlgoritmo
