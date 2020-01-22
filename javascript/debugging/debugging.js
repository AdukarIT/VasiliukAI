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

function repeat(str = 'слово', n = 2) {
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

//Создайте функцию, которая выводит в консоль числа от 10 до 99, 
//заканчивающиеся на 7 или делящиеся на 7 (в убывающем порядке).

function seven() {
	for (let x = 99; x >= 10; x--) {
		if (x % 7 == 0 || x % 10 == 7) {
		console.log(x);
		}
	}
}
console.log(seven());

//Создайте функцию, которая для чисел от 2 до 20 выводит в консоль все их делители.
function del() {
	for (var i = 2; i <= 20; i++) {
		for (var j = 2; j <= 9; j++) {
			if (i % j == 0) console.log(j + " делитель числа " + i);
		}
	}
}
console.log(del());
//сделать задание 10 в общем виде.
function noName(x, y) {
	for (var i = x; i <= y; i++) {
			for (var j = x; j <= i; j++) {
				if (i % j == 0) {
				console.log(j + " делитель числа " + i);
				}
			}  
	}
}
noName(2, 21);

//Создайте функцию с параметрами size (число) и unit (строка). 
//В unit передаются единицы измерения информации («Кб», «Мб», «Гб»), 
//в size – количество таких единиц. Функция возвращает количество байт в size.

function howMuchIs(size, unit) {
	switch (unit) {
		case "Кб":
		case "кб":
		case "кБ":
		case "КБ":
			return "В " + size + " Кб" + " содержится " + size * 1024 + " байт";
			break;
		case "Мб":
		case "мб":
		case "мБ":
		case "МБ":
			return "В " + size + " Мб" + " содержится " + size * 2 ** 20 + " байт";
			break;
		case "Гб":
		case "гб":
		case "гБ":
		case "ГБ":
			return "В " + size + " Гб" + " содержится " + size * 2 ** 30 + " байт";
			break;
		default: 
			alert ("Корявые данные");
			break;
	}
}
console.log(howMuchIs(500, "Гб"));

//Создайте функцию, которая ищет наибольший общий делитель двух чисел.

function biggestOne(a, b) {
	let x = 1;
	let y = 0;
	while (x <= a) {
		if(a % x == 0 && b % x == 0) {
			y = x;
		}
		x++;
	}
	console.log(y);
}
biggestOne(30, 65);

// Решите предыдущую задачу через рекурсию.
function biggestOneAgain(a, b) {
if (a == 0) {
	return b;
} else {
	return biggestOneAgain(b % a, a);
}
}
console.log(biggestOneAgain(30, 65));

//Создайте функцию words(),  которая в зависимости от переданного в нее целого числа n, 
//будет выводить слово «карандаш» в правильной форме («12 карандашей», но «22 карандаша»).
function words(n) {
	if (n >= 5 && n <= 20 || n % 10 == 0 || n == 0 || n % 10 > 4 && n % 10 <= 9) {
	return n + ' карандашей';
} else if (n > 1 && n < 5 || n % 10 < 5 && n % 10 > 1) {
	return n + ' карандаша';
} else if (n == 1 || n % 10 == 1) {
	return n + ' карандаш';
}
}
console.log(words(100000));

//Создайте функцию, которая проверяет, можно ли представить число в виде суммы квадратов двух целых однозначных чисел.
function getSquare(z) {
    for(let x = 1; x < z; x++ ){
        for(let y = z; y >= x; y--){
            if(x * x + y * y == z){
                return true;
            }
        }
    }
    return false;
}
console.log(getSquare(8));
