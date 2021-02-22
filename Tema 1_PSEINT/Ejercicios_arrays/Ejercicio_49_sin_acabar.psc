Algoritmo Ejercicio_49
	
//	Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas)
//correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:
//a) ¿En qué mes se registró el mayor coste de producción de dulces?
//b) Promedio anual de los costes de producción de bebidas
//c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste?
//d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?
	
	Definir tamano, i ,   array_dulces , array_bebidas , array_conservas , max_dulces, mes_maximo , mes  Como Entero;
	tamano = 12;
	Dimension  array_dulces[tamano];
	Dimension array_bebidas[tamano];
	Dimension array_conservas[tamano];
	
	Para mes = 0 hasta tamano -1 con paso 1 Hacer
		array_dulces[i] = Aleatorio( 50 , 300);
		array_bebidas[i] = Aleatorio(50 , 300);
		array_conservas[i] = Aleatorio(50 , 300);
		
		Escribir "Mes" , i + 1 ,"    " array_dulces[i] "    ", array_bebidas[i], "     " , array_conservas[i];
		
		
	FinPara
	
	// apartado a)
	
	Para mes = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Si mes == 1 O array_dulces[i] > max_dulces Entonces
			max_dulces = array_dulces[mes];
			mes_maximo = mes;
			
			
		FinSi
		
	FinPara
     Escribir " El mes que se registro el mayor coste de produccion de dulces es " , mes_maximo + 1, "con un total de " max_dulces;
	
	 // apartado B
	 Para mes = 0 Hasta tamano - 1 Con Paso 1 Hacer
		 
		 suma= suma + array_bebidas[mes];
		 
		 
		 
	 FinPara
	 Escribir " La media de bebidas es " , suma / tamano;
	
	
	
	
	
FinAlgoritmo
