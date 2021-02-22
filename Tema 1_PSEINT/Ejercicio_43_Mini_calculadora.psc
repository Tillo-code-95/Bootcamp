Algoritmo Ejercicio_43
	
	Definir A , B , option Como Entero;
	
	Repetir
		Escribir " Introduce numeros"; 
		Leer A , B;
		Escribir " Seleccione el numero de una de las opciones";
		Escribir " 1 : sumar";
		Escribir " 2 : restar";
		Escribir " 3 : division";
		Escribir " 4 : producto ";
		Escribir " 5 : Salir del programa ";
		Leer option;
		
		Limpiar Pantalla;
		
		Segun option Hacer
			1:
				Escribir " La suma  de " , A " mas " , B , " es " , A + B;
			2:  
				Escribir " La resta de " , A " menos " , B , " es " , A - B;
			3:
				Escribir " La division de " , A " entre " , B , " es " , A / B;
			4:
				Escribir " El producto de " , A " por " , B , " es " , A * B;
			5:
				Escribir " Gracias por usar esta calculadora . Hasta la proxima ";
			De Otro Modo:
				Escribir " Instruccion no valida ";
		Fin Segun
		
	Mientras Que option <> 5 
	
	
	
	
FinAlgoritmo
