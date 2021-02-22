Algoritmo Ejercicio_11
	// En una tienda hay descuentos a los clientes
	// dependiendo de la cantidad de compras
	// Los descuentos se basan en
	Definir compra Como Entero;
	
	Leer compra;
	// Las condiciones se pueden quitar al tener ya un rango que englobe a los demas precios
	// ejemp: cuando el descuesto es entre 1000 y 7000, <= incluye el descuento en el mas grande
	// <=7000 te incluye el 1000 
	Si compra < 500 Entonces
		Escribir " no hay descuento ";
	SiNo
		Si compra <= 1000 Entonces
			Escribir " Tienes un 5% de descuento: " , compra * 0.95 ;
		SiNo
			Si compra <= 7000 Entonces
				Escribir " Tienes un descuento del 10% " , compra * 0.9 ;
			SiNo
				Si compra <= 15000 Entonces
					Escribir " tienes un descuento del 20% " , compra * 0.8;
				SiNo
					Escribir " tienes un 25% de descuento" , compra * 0.75;
				FinSi
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
