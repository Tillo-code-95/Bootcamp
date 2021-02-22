Algoritmo Ejercicio_59
//	Se dispone de un array de 5 páginas, 4 filas y 10 columnas, que se refieren al centro, al curso y al
//	número de alumnos de un colegio respectivamente. Imprimir la nota media por curso y la nota
//	media máxima y su centro de pertenencia.
	
	Definir  numero_centros, numero_alumnos , numero_cursos , centro , curso , alumno , suma , max_centro Como Entero;
	Definir nota , media , max Como Real;
	numero_centros = 5;
	numero_cursos = 4;
	numero_alumnos = 10;
	Dimension nota[numero_centros , numero_cursos , numero_alumnos] ;
	
	Para centro = 0 hasta numero_centros - 1 Hacer
		Escribir " Centro " , centro;
		
		para curso = 0 hasta numero_cursos -1 Hacer
			
			Escribir "Curso" , curso , " : " Sin Saltar;
			// La suma se inicializa aqui a 0 para que empiece de nuevo con cada curso
			suma= 0;
			
			para alumno = 0 Hasta numero_alumnos - 1 Hacer
				
				nota[centro,curso,alumno] = Aleatorio(1,10); // -  (Aleatorio(0 , 100) / 100);
				
				Escribir nota[centro,curso,alumno] , " " Sin Saltar;
				
				suma = suma + nota[centro,curso,alumno];
				
			FinPara
			// tras tener todas las notas del curso
			// calculamos la media
			media = suma / numero_alumnos;
			
			Escribir " - Media del curso : "  , media Sin Saltar;
			
			//Se calcula curso == 0 y centro ==0 se calcula el primer valor de todos y sirve Para 
			// inicializar el maximo (max) 
			Si (curso == 0 Y centro == 0) O media > max Entonces
				max = media;
				max_centro = centro;
				
				
			FinSi
			
			
			Escribir " ";
			
		FinPara
		
		Escribir " ";
		
	FinPara
	
	Escribir " ";
	
	Escribir " La media mas alta es " , max , " del centro " , max_centro;
	
FinAlgoritmo
