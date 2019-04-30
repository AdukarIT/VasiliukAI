// Функция, которая принимает три числа: два первых катеты, третье гипотенуза.
function pifagor(a, b, c) {
	if ((a*a) + (b*b) == (c*c)) {
		return true;
	} else if ((a <= 0) || (b <= 0) || (c <= 0)) {
		return false;
	} else {
		return false;
	}
}
console.log(pifagor(3, 4, 5));

//Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений.

function repeat(str = '', n = 2) {
	let result = '';
	for (let i = 1; i <= n; i++) {
		result += str;
	}
	return result;
}
console.log(repeat());

//Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт в кабинете. 
//Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».

function children(pupil, desk);
	let n = pupil - (desk * 2);
	if (n >= 1 ) {
		return ('не хватает' + n + 'парт');
	}
