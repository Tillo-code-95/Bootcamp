Algoritmo Ejercicio_44
	
//Partir del ejercicio 2 y añadir la siguiente funcionalidad:
//	El usuario tendrá un menú numérico en pantalla para poder elegir entre las operaciones a realizar.
//	Si da una opción incorrecta (no existe), el programa avisará al usuario y volverá a mostrar el menú.
//Hará esto hasta que el usuario elija la opción de salir del programa. Ejemplo de menú impreso por
//	pantalla:
//	Seleccione el número de una de las siguientes opciones:
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
