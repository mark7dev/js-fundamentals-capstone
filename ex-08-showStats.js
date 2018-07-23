/**
 * showStats()
 *
 * Write a function called showStats() that takes a number and an array of numbers
 * it should return an object with 4 properties:
 *    1) count_inputEqualTo: the number of elements in the array that the input number is greater than
 *    2) count_inputGreaterThan: the number of elements in the array that the input is less than
 *    3) count_inputLessThan : the number of elements in the array that the input is equal to.
 *    4) inputArraySize: the quantity of elements in the set (not including input, obvs.)
 *
 *  Ex:   showStats(3, [1,2,3,4,5,6,5,4,3,2,1])
 *   => {
 *     countValuesInputIsEqualTo: 2,
 *	   countValuesInputIsGreaterThan: 4,
 *     countValuesInputIsLessThan: 5,
 *     inputArraySize: 11
 *   }
**/



// ++ YOUR CODE HERE

function showStats(number, array) {
	var count_inputEqualTo = 0;
	var count_inputGreaterThan = 0;
	var count_inputLessThan = 0;

	for (var i = 0; i < array.length; i++) {
		if (number === array[i]) {
			count_inputEqualTo++;
		} else if (number < array[i]) {
			count_inputGreaterThan++;
		} else if (number > array[i]) {
			count_inputLessThan++;
		}
	}
	var obj = {};
	obj.count_inputEqualTo = count_inputEqualTo;
	obj.count_inputGreaterThan = count_inputGreaterThan;
	obj.count_inputLessThan = count_inputLessThan;
	obj.inputArraySize = array.length;
	return obj;
}







//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var parkingTicketsCount = [33, 44, 22, 21, 92, 63, 12, 42, 56, 11, 99,
482, 42, 56, 42, 19, 20, 88, 38, 18, 12, 64, 42, 21,
33, 31, 10, 84, 53, 13, 42, 4493, 31, 24, 55, 32, 42, 11, 56]

var stats_1  = showStats(42, parkingTicketsCount)
var stats_2 =  showStats(56, parkingTicketsCount)

console.log(stats_1)
console.log(stats_2)

console.log("[1] Should return a length of 39");
console.assert( stats_1.inputArraySize === 39  );
console.log("===========================================");
console.log();

console.log("[2] Should return 6");
console.assert( stats_1.count_inputEqualTo === 6  ) ;
console.log("===========================================");
console.log();

console.log("[3] Should return 14");
console.assert( stats_1.count_inputGreaterThan === 14  ) ;
console.log("===========================================");
console.log();

console.log("[4] Should return 8");
console.assert( stats_2.count_inputGreaterThan === 8 ) ;
console.log("===========================================");
console.log();

console.log("[5] Should return 28");
console.assert( stats_2.count_inputLessThan === 28 ) ;
console.log("===========================================");
console.log();
