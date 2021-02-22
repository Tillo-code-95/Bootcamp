Algoritmo Ejercicio_52
	
//Rellenar un array con 10 números aleatorios entre 1 y 15. Posteriormente, buscar un número
//introducido por teclado y nos debe decir si está incluido en el array y el índice de su primera
//coincidencia.
	
	Definir array , N , indice ,contador,  tamano Como Entero;
	
	tamano = 10;
	
	Dimension array[tamano];
	
	//Generar numeros aleatorios elemento a elemento.
	Para indice = 0 hasta tamano - 1 Con Paso 1 Hacer
		
		array[indice] = Aleatorio(1,15);
		Escribir  array[indice] " " Sin Saltar;
	FinPara
	Escribir " ";
	Escribir " Introduce el numero que quieres buscar";
	Leer N;
	
	indice = 0;
	Mientras Indice < tamano Y array[Indice] <> N Hacer
		Indice = Indice + 1;
		
	FinMientras
	
	Si Indice < tamano Entonces
		
		Escribir " La primera coincidencia de " , N , " es el indice " , Indice;
	SiNo
		Escribir N , " no esta presente en el array";
		
	FinSi
	
FinAlgoritmo
