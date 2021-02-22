Algoritmo Ejercicio_56
	
	Definir curso , alumno , tamano_cursos , tamano_alumnos , notas Como Entero;
	
	tamano_cursos = 3;
	tamano_alumnos = 2;
	
	
	Dimension notas[tamano_cursos , tamano_alumnos];
	
	Para curso = 0 hasta tamano_cursos - 1 Con Paso 1 Hacer
		
		para alumno = 0 hasta tamano_alumnos - 1 Con Paso 1 Hacer
			
			Escribir " introduce la nota del alumno " , alumno , " del curso " , curso;
			
			
			Leer notas[curso , alumno];
			
		FinPara
		
	FinPara
	
	Para curso = 0 hasta tamano_cursos - 1 Con Paso 1 Hacer
		
		Escribir "Curso ", curso, ": " Sin Saltar;
		
		para alumno = 0 hasta tamano_alumnos - 1 Con Paso 1 Hacer
			
			Escribir  "Alumno ", alumno, " nota:", notas[curso , alumno] "       " Sin Saltar;
			
		FinPara
		
		Escribir "";
	FinPara
	
	
	
FinAlgoritmo
