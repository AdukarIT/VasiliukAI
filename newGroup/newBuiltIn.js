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

//Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается ли она на .html. Если оба условия выполнены, функция возвращает true, 
//в ином случае – false.

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

//Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним и тем же символом (например, 'A' == 'a').
//string.charAt(i).toUpperCase() == string.charAt(i).toLowerCase()
function howMuchNew(string, symbol) {
	let sum = 0;
	for (let i = 0; i <= string.length; i++) {
		if (string.charAt(i).toLowerCase() == symbol.toLowerCase()) {
			sum++
		}
	}
	return sum;
}
console.log(howMuchNew("Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.", "Н"));


//Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике) и создаёт на его основе новый.
//Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}. initial – значение элемента исходного массива с тем же индексом, 
//sqrt – корень квадратный из этого значения. Если округление sqrt по обычным математическим правилам сходится с его округлением через floor, 
//то floor = true, а ceil = false. Если сходится с округлением через ceil - наоборот. Например, пусть у исходного массива arr[0] = 19, 
//тогда в новом массиве newArr[0] = {initial: 19, sqrt: 4.358898943540674, floor: true, ceil: false}.
