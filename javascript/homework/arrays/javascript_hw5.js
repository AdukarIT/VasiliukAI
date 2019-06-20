//используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len),
//которая возвращает массив случайных чисел длинной len.

function getRandomArray(len) {
	let num = [];
	for (let i = 0; i <= len; i++) {
		num[i] = Math.random();
	}
	return num;
}
let randomArr = getRandomArray(5);
alert(randomArr);

//Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.

function theBiggestOne(array) {
	let sum = 0;
	for(let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	let aver = sum / array.length;
	for(let j = 0; j < array.length; j++){
		if(array[j] > aver){
			console.dir(array[j]);
		}
	}
}
theBiggestOne(randomArr);
