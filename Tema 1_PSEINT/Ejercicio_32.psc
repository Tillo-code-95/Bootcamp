Algoritmo Ejercicio_32
	//El siguiente es el menú de un restaurante de bocadillos. Diseñar un algoritmo capaz de leer el
	//número de unidades consumidas de cada alimento ordenado y calcular la cuenta total. Vamos a
	//suponer que estos precios son fijos, es decir, que son constantes (recuerda que en PSeInt no se
	//usa comas para separar la parte decimal de la parte entera)
	//Bocadillo de Jamón 1,5€   
	
	Definir Precio_bocadillo , Precio_refresco , Precio_creverza, Precio_pan Como Real;
	Definir bocadillos, refrescos ,cervezas, pan Como Entero;
	Precio_bocadillo = 1.5;
	Precio_refresco = 1.05;
	Precio_creverza = 0.75;
	Precio_pan = 2;
	
	Escribir " Cantidad de bocadillos vendidos ";
	Leer bocadillos ;
	Escribir " Cantidad de refrescos vendidos" ;
	Leer refrescos;
	Escribir " Cantidad de cerveza vendida ";
	Leer cervezas;
	Escribir "Cantidad de pan vendidos";
	Leer pan;
	// Para saber el precio final multiplicamos la cantidad de productos ( que la introducimos nosotros)
	// por el precio de cada producto , ejemp ( Precio_bocadillo * bocadillo)
	Escribir " El precio total seria " ,  ( Precio_bocadillo * bocadillos) + ( Precio_refresco * refrescos) + ( Precio_creverza * cervezas ) + ( Precio_pan * pan);
	
	
FinAlgoritmo
