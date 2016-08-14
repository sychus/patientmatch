
function maxLargo(stringAMin, stringBMin) {
	var longA = stringAMin.length;
	var longB = stringBMin.length;

	if (longA > longB) {
		return longA
	} else {
		return longB
	}
}

function minLargo(stringAMin, stringBMin) {
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
function stringMatching(stringA, stringB) {
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
function sexMatching(sexA, sexB) {
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
function identityMatching(idA, idB) {
	if (idA == idB)
		return 1
	else
		return 0

}

function levenshtein(stringA, stringB) {
	var s1 = stringA.toLowerCase();
	var s2 = stringB.toLowerCase();
	var maxLen = maxLargo(s1, s2);

	var l1 = s1.length;
	var l2 = s2.length;
	var d = [];
	var c = 0;
	var a = 0;

	if (l1 == 0)
		return l2;

	if (l2 == 0)
		return l1;

	var d = new Buffer((l1 + 1) * (l2 + 1));
	a = l1 + 1;

	for (var i = 0; i <= l1; d[i] = i++);
	for (var j = 0; j <= l2; d[j * a] = j++);

	for (var i = 1; i <= l1; i++) {
		for (var j = 1; j <= l2; j++) {
			if (s1[i - 1] == s2[j - 1])
				c = 0;
			else
				c = 1;
			var r = d[j * a + i - 1] + 1;
			var s = d[(j - 1) * a + i] + 1;
			var t = d[(j - 1) * a + i - 1] + c;

			d[j * a + i] = Math.min(Math.min(r, s), t);
		}
	}
    
	return  1 - ((d[l2 * a + l1])/maxLen) 
}


module.exports = {
	matching: function (identidadA, identidadB, weights) {
		var completeNameA = identidadA.name.given + identidadA.name.family;
		var completeNameB = identidadB.name.given + identidadB.name.family;

		var value = (weights.name * levenshtein(completeNameA, completeNameB) +
			weights.gender * sexMatching(identidadA.gender, identidadB.gender) +
			weights.birthDate * stringMatching(identidadA.birthDate, identidadB.birthDate) +
			weights.identity * identityMatching(identidadA.identity, identidadB.identity));

		return value;
	}
};

