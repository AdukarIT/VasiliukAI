// Функция, которая принимает три числа: два первых катеты, третье гипотенуза.
function pifagor (a, b, c) {
	if ((a*a) + (b*b) == (c*c)) {
		return true;
	} else if ((a <= 0) || (b <= 0) || (c <= 0)) {
		return false;
	} else {
		return false;
	}
}
console.log(pifagor(3, 4, 5));

// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений.

function repeat(str = 'пиздюк', n = 2) {
	let result = '';
	for (let i = 1; i <= n; i++) {
		result += str;
	}
	return result;
}
console.log(repeat());

// Создайте функцию, которая принимает два аргумента - количетсво учеников в классе и количество парт в кабинетею
// Функция возвращает строку вида "не хватает двух парт" / "1 лишняя парта".

function children(pupil, desk) {
	let n = pupil - (desk * 2);
	if (n >= 1 ) {
		return ('не хватает' + n +  'парт');
	} else if (n <= 1) {
		return ('парт достаточно');
	}
}
console.log(children(10, 0));

// Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале. 
// Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание: 

let mark = +prompt('Enter your mark and get its equivalent');
	switch (mark) {
		default: 
			alert('Error, does not exist');
			break;
		case(0):
			alert('Error');
			break;
		case(1):
		case(2):
			alert('Unsatisfactory');
			break;			
		case(3):
		case(4):
			alert('Satisfactory');
			break;
		case(5):
			alert('Almost good');
			break;
		case(6):
			alert('Good');
			break;
		case(7):
			alert('Very good');
			break;
		case(8):
			alert('Almost excellent');
			break;
		case(9):
			alert('Excellent');
			break;			
		case(10):
			alert('Brilliant');
			break;
		}
console.log(mark);

//Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), пока не будет введено число 0.

function numbers() {
	let a;
	do {
		a = +prompt ('Enter random number');
	} while (a != 0);
}
numbers();

//Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся меньше 100
//выводила эту сумму в консоль, а возвращала количество введённых чисел.

function sum() {
	let a; sum = 0; let i = 0;
	do {
		a = +prompt ('Enter number for sum');
		sum += a;
		console.log(sum);
		i++;
	} while (sum < 100);
	return i;
}
sum();

//Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.

function simpleNum(a) {
	if (a == 2) {
		return 'Simple number';
	} else if (a % 2 == 0) {
		return 'Isnt simple number'
	} else {
		return 'Simple number'
	}
}
console.log(simpleNum(33));

//Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому номеру месяца.
//Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень, зима, весна),
//к которому относится месяц. Если нет –сообщение об ошибке.

let monthNumber = +prompt('Enter number of month u wanna know');
switch (monthNumber) {
	default: 
		alert('Error, does not exist');
		break;
	case (12):
	case (1):
	case (2):
		alert('It is Winter');
		break;
	case (3):
	case (4):
	case (5):
		alert('It is Spring');
		break;
	case (6):
	case (7):
	case (8):
		alert('It is Summer');
		break;
	case (9):
	case (10):
	case (11):
		alert('It is Autumn');
		break;
}
