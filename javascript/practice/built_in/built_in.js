//PRACTICE:

//Напишите функцию, которая создаёт и возвращает массив длиной 20 элементов, каждый из которых – случайное число от 1 до 50.

function getArray() {
	let array = [];
	for (let i = 0; i < 20; i++) {
		array[i] = Math.floor(Math.random() * (50 - 1));
	}
	return array;
}
console.log(getArray());

//Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента: длину нужного массива, минимальное и максимальное значения элементов.

function getNewArray(length, min, max) {
	let array = [];
	for (let i = min; i < length; i++) {
		array[i] = Math.floor(Math.random() * (max - 1));
	}
	return array;
}
console.log(getNewArray(20, 0, 50));

//Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается ли она на .html. Если оба условия выполнены, функция возвращает true, в ином случае – false.

function checkDomen(string) {
	// string = "https://fmx.by/.../main.html"
	if (string.slice(0, 8) == "https://" && string.slice(-5) == ".html") {
		return true
	} else {
		return false
	}
}
console.log(checkDomen("https://fmx.by/.../main.html"));

//Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.

function howMuch(string, symbol) {
	let sum = 0;
	for (let i = 0; i <= string.length; i++) {
		if(string.charAt(i) == symbol) {
			sum++
		}
	}
	return sum;
}
console.log(howMuch("Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.", "с"));

//Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним и тем же символом (например, 'A' == 'a').string.charAt(i).toUpperCase() == string.charAt(i).toLowerCase()

function howMuchNew(string, symbol) {
	let sum = 0;
	for (let i = 0; i <= string.length; i++) {
		if (string.charAt(i).toLowerCase() == symbol) {
			sum++
		}
	}
	return sum;
}
console.log(howMuchNew("Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.", "Н"));

//Напишите функцию, которая выводит в консоль текущие дату, месяц и год в формате «24 января 2019».

function date() {
	let now = new Date();
	let dateOptions = {
		year: 'numeric',
  		month: 'long',
  		day: 'numeric'
	};
	console.log(now.toLocaleString("ru", dateOptions));
};
date();

//Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.

function time() {
	let now = new Date();
	let dateOptions = {
		hour: 'numeric',
  		minute: 'numeric',
  		second: 'numeric'
	};
	console.log(Date.parse(now));
	console.log(Date.parse(now.toLocaleString(dateOptions)));
}
time();

//Напишите функцию, которая принимает от пользователя строку. Если эта строка не содержит буквы «ф», сгенерируйте собственную ошибку. Вызовите функцию так, чтобы при возникновении «поймать» ошибку в try/catch.
// let string = prompt();
// function catchError(string) {
// 	try {
// 		for (let i = 0; i <= string.legth; i++) {
// 			if (i != 'ф') {
// 				throw new Error ("Буква Фэ не выявлена!");
// 			}
// 		} 
// 	} catch (error) {
// 			console.error("Error-Error-Error");
// 			console.log(error.message);
// 		} finally {
// 			console.log('Continue');
// 		}
// 	}
// catchError();

