Algoritmo Ejercicio_20
	Definir clave Como caracter;
	Definir contador , n Como Entero;
	
	contador = 0;
	
	n = 3;

	Repetir
		Escribir " Introduzca su clave , dispone de " , n , " intentos ";
		Leer clave;
		contador = contador + 1;
		n = n - 1;
		
	Hasta Que  clave == "eureka"  o contador == 3;
	
	Si clave == "eureka" Entonces
		Escribir " bienvenido ";
	SiNo
		Escribir " Ha sido bloqueado ";
	FinSi
	
FinAlgoritmo
