Algoritmo Ejercicio_44
	
//Partir del ejercicio 2 y a�adir la siguiente funcionalidad:
//	El usuario tendr� un men� num�rico en pantalla para poder elegir entre las operaciones a realizar.
//	Si da una opci�n incorrecta (no existe), el programa avisar� al usuario y volver� a mostrar el men�.
//Har� esto hasta que el usuario elija la opci�n de salir del programa. Ejemplo de men� impreso por
//	pantalla:
//	Seleccione el n�mero de una de las siguientes opciones:
//	1: Sumar
//	2: Restar
//	3: Multiplicar
// 4: Dividir
// 5: Salir del programa.
	
	
	Definir A , B , option Como Entero;
	Repetir // Utilizamos el bucle repetir 
		Escribir " Introduce 2 numeros";
		Leer A , B;
		Escribir " Seleccione el numero de una de las opciones ";
		Escribir " 1 sumar " ;
		Escribir " 2 restar " ;
		Escribir " 3 multiplicar" ;
		Escribir " 4 dividir " ;
		Escribir " 5 salir del programa" ;
		Leer option;
		
		
		
		Segun option Hacer
			1:
				Escribir " La suma de " , A , " Y " , B " es " , A + B;
			2:
				Escribir " La resta de " , A , " Y " , B " es " , A - B;
			3:
				Escribir " El producto de " , A , " Y " , B " es " , A * B;
			4:   
				Escribir " La division de " , A , " Y " , B " es " , A / B;
			5:
				Escribir " Gracias por usar esta calculadora ";
				
			De Otro Modo:
				Escribir " No ha introducido los datos correctos ";
		Fin Segun
		
	Mientras Que option <> 5;
	
	
FinAlgoritmo
