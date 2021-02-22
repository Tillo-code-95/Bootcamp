Algoritmo Ejercico_7
	
	// Queremos determinar un flujo del cambio de una compra en tienda en funcion del dinero Entregado
	// Definimos los terminos que vamos a utilizar , vuelta se leasigna a  oeracion del dinero "entregado - Precio
	//Utilizamos las expresiones >= y <= para determinar si lo entregado es mayor al precio o viceversa
	Definir Precio, vuelta, entregado Como Entero;
	Leer entregado , Precio;
	Vuelta = entregado - Precio;
	Si Entregado >= Precio Entonces
		Escribir " su cambio es de " , vuelta;
	SiNo
		Si Entregado <= Precio Entonces
			Escribir " Le falta dinero ";
		FinSi
	FinSi
	
		
	
	
FinAlgoritmo
