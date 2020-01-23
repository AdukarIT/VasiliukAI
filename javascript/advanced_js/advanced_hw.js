//Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode. Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики.

//исходный массив:
let array = ['При', ' помощи', ' call', ' можно', ' легко', 'взять', 'метод', 'одного', 'объекта', ',', ' в', ' том', ' числе', ' встроенного',' , ', 'и', ' вызвать', ' в', ' контексте', ' другого','.'];

function uniCounter(symbolNumber) {
	let counter = 0;
	array.forEach(function(arrayPart) {
		let symbol = String.fromCodePoint(symbolNumber);
		for (let a = 0; a < arrayPart.length; a++) {
			if (arrayPart[a] == symbol)
				counter++;
		}
	});
	return counter;
}
// символ: в 1074, о 1086, и 1080.
console.log(uniCounter(1086));


// Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1, фиксируя искомый символ. Например:
// let countOfD = letterCounter(100);	// 100 = 'd' в Unicode
// console.log(countOfD(["dad", "rod", "doctor"])); // 4


function symbolCount(symbolNumber) {
	let counter = 0;
	return function(array) {
		array.forEach(function(el) {
			let symbol = String.fromCodePoint(symbolNumber);
			for (let a = 0; a < el.length; a++) {
				if (el[a] == symbol) 
					counter++;
				}
		});
	return counter;
	}
}
let countOfD = symbolCount(100);
console.log(countOfD(["dad", "rod", "doctor"]));


