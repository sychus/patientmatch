var macheo = require('./match');

var weights = {
	identity: 0.2,
	name: 0.3,
	gender: 0.4,
	birthDate: 0.1

};

/*Estos ejemplos de paciente están basados en un subconjunto de campos de FIHR
la idea es comparar un set de datos básicos.
*/

//Ejemplos de Pacientes a comparar

var pacienteA = {
	identity: 302569851,
	name: {
		given: "Gonzelo",
		family: "Caranza"
	},
	gender: "male",
	birthDate: '01-01-1980'
};

var pacienteB = {
	identity: 302569851,
	name: {
		given: "Gonzalo",
		family: "Carranza"
	},
	gender: "male",
	birthDate: '01-01-1980'
};



console.log(macheo.matching(pacienteA, pacienteB, weights));
