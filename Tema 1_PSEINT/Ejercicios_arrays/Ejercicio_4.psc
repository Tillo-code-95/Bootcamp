Algoritmo Ejercicio_35
	
//	Crear un array de números donde le indicaremos el tamaño por teclado. Rellenará cada elemento
//	con números aleatorios entre 0 y 9. Posteriormente, mostrará por pantalla el valor de cada posición
//	junto con su índice y finalmente, la suma de todos los valores.
	
	
	
	Definir my_array , indice , tamano, random, suma Como Entero;
	Escribir " introduzca tamaño ";
	
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
