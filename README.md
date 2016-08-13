# Macheo de pacientes
Primer versión del algoritmo de macheo de pacientes.

# Resumen
> El algoritmo devuelve un valor entre 0 y 1 como resultado de su ejecución. Mientras más cercano a 1 es el resultado mayor es la igualdad entre los objetos comparados.

Precondiciones:
- El algoritmo espera 3 parámetros (objetos json). Los primeros dos son pacientes y el 3ero es un json con los pesos de los campos a comparar.
- El algoritmo no chequea errores o faltantes en dichos json. Supone que los objetos json son completos y correctos.ond
- Debe incluirse el archivo match.js antes de ser invocada la función.

PostCondiciones:
- El resultado es un número entre 0 y 1.

Los objetos JSON de pacientes tienen la siguiente estructura
----------
`myPatient = {
	identity: 12345674,
	name: {
		given: "a name",
		family: "a surname"
	},
	gender: "male",
	birthDate: '01-01-1980'
};`

El objeto JSON de los pesos tiene la siguiente estructura
----------
Ejemplo:

`weights = {
	identity: 0.2,
	name: 0.3,
	gender: 0.4,
	birthDate: 0.1
};`
# Cómo usarlo y probarlo
- Descargar los archivos desde https://github.com/sychus/patientmatch.git
- Luego en el directorio donde hemos bajado los archivos, ejecutamos npm install
- Ejecutamos el programa: node test.js
