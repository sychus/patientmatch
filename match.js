
function maxLargo (stringAMin, stringBMin) {
	var longA = stringAMin.length;
	var longB = stringBMin.length;

	if (longA > longB) {
		return longA
	} else {
		return longB
	}
}

function minLargo (stringAMin, stringBMin) {
	var longA = stringAMin.length;
	var longB = stringBMin.length;

	if (longA < longB) {
		return longA
	} else {
		return longB
	}
}

/**
 * @description stringMatching - Devuelve la cantidad de coincidencias sobre la mayor longitud
 * @param {string} stringA - unString
 * @param {string} stringB - unString
 * @author Hugo Fernández hfernandez@neuquen.gov.ar 
 */
function stringMatching (stringA, stringB) {
	var stringAMin = stringA.toLowerCase();
	var stringBMin = stringB.toLowerCase();

	var maxLen = maxLargo(stringAMin, stringBMin);
	var minLen = minLargo(stringAMin, stringBMin);
	var coincidencias = 0;


	for (var i = 0; i < minLen; i++) {
		if (stringAMin.charAt(i) == stringBMin.charAt(i))
			coincidencias++
	}

	return coincidencias / maxLen;
}

/**
 * @description sexMatching - Devuelve 1 si los datos son idénticos
 * @param {string} sexA - sexo del pacienteA
 * @param {string} sexB - sexo del pacienteB
 * @author Hugo Fernández hfernandez@neuquen.gov.ar 
 */
function sexMatching (sexA, sexB){
	if (sexA == sexB)
		return 1
	else
		return 0
}

/**
 * @description identityMatching - Devuelve 1 si los identificadores son idénticos
 * @param {int} idA - Documento del pacienteA
 * @param {int} idB - Documento del pacienteB
 * @author Hugo Fernández hfernandez@neuquen.gov.ar 
 */
function identityMatching (idA, idB){
	if (idA == idB)
		return 1
	else
		return 0

}

module.exports = {
	matching: function(identidadA, identidadB, weights) {
		var completeNameA = identidadA.name.given + identidadA.name.family;
		var completeNameB = identidadB.name.given + identidadB.name.family;
		
		var value = ( weights.name * stringMatching (completeNameA, completeNameB) + 
				 weights.gender * sexMatching (identidadA.gender, identidadB.gender) +
				 weights.birthDate * stringMatching (identidadA.birthDate, identidadB.birthDate) + 
				 weights.identity * identityMatching (identidadA.identity, identidadB.identity));

		return value; 
	}
};

