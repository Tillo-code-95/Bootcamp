Algoritmo Ejercicio_35
	
//	Crear un array de n�meros donde le indicaremos el tama�o por teclado. Rellenar� cada elemento
//	con n�meros aleatorios entre 0 y 9. Posteriormente, mostrar� por pantalla el valor de cada posici�n
//	junto con su �ndice y finalmente, la suma de todos los valores.
	
	
	
	Definir my_array , indice , tamano, random, suma Como Entero;
	Escribir " introduzca tama�o ";
	
	Leer tamano;
	
	Dimension my_array[tamano];
	
	
	//Rellena nuestro array uno a uno de tamano.
	Para indice = 0 hasta tamano -1 con paso 1 Hacer
		my_array[indice] = Aleatorio( 0 , 9);
	FinPara
	
	// Lo imprime elemento a elemento y acumula la suma.
	suma = 0;
	Para indice = 0 hasta tamano - 1 Hacer
		Escribir "Indice ", indice, ": " , my_array[indice];
		suma = suma + my_array[indice];
	FinPara
	
	Escribir " La suma de los elementos es , " , suma ;
FinAlgoritmo
