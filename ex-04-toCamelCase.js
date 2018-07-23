
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */



 // ++ YOUR CODE HERE

function toCamelCase(text) {
	var tempText = text.split(" ");
	var tempWord = [];

	for (var i = 1; i < tempText.length; i++) {
		tempWord = tempText[i].split('');
		for (var j = 0; j < tempWord.length; j++) {
			tempWord[j] = tempWord[j].toLowerCase();
		}
		tempWord[0] = tempWord[0].toUpperCase();
		tempText[i] = tempWord.join('');
	}
	result = tempText.join('');
	return result;
}







// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
  console.log('%cFunction: toCamelCase', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs:
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert( toCamelCase("fetch records") === 'fetchRecords' )
console.assert( toCamelCase("create table row") === 'createTableRow' )
console.assert( toCamelCase("convert to HTML") === 'convertToHtml' )
console.assert( toCamelCase("get user account ID") === 'getUserAccountId' )


/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
