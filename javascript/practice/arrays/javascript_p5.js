//создайте массив и в цикле заполните его чётными числами от 2 до 20
let arrayP1 = new Array(10);
	for (let i = 0; i < arrayP1.length; i++) {
		arrayP1[i] = (i + 1) * 2;
	}
console.log(arrayP1);
//преобразуйте цикл, чтобы его элементы стали равны своему индексу умноженному на 5
for (let i = 0; i < arrayP1.length; i++) {
	arrayP1[i] = i * 5;
}
console.log(arrayP1);
// получите от пользователя 3 числа, создайте из них массив. используя циклы, найдите наибольшее из них
// и разделите на него каждый из чисел массива.
let num1 = +prompt ("введите число 1");
let num2 = +prompt ("введите число 2");
let num3 = +prompt ("введите число 3");

let arrayP2 = [num1, num2, num3];
	if (num1 > num2 || num2 > num3) {
		let num4 = num2 / num1;
		let num5 = num3 / num1;
		let num6 = num1 / num1;
	}
console.log(arrayP2[2]);


