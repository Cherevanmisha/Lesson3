// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

/*let arr = [];
for (let i = 0; i < 50; i++) {
    arr[i] = i * 2;
}
console.log(arr);*/

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr[i] = i*2+1;
// }
// console.log(arr);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()*21);
// }
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()* (732 - 8) + 8);
// }
// console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен

// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()* (732 - 8) + 8);
// }
// console.log(arr);
// for (let i = 2; i < arr.length; i+=3) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()* (732 - 8) + 8);
// }
// console.log(arr);
//
// for (let i = 2; i < arr.length; i+=3) {
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є
// // парним та записати їх в новий масив
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()* (732 - 8) + 8);
// }
// console.log(arr);
//
// let arr2 = [];
// for (let i = 2; i < arr.length; i+=3) {
//     if (arr[i]%2===0){
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i])
//     }

// }



// 6. Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum=  sum + arr[i];
//     };
// console.log(sum);
//
// averageСheck  = sum / arr.length;
// console.log(averageСheck)
//





//
// 7. Створити масив з рандомними значеннями,
// помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()* (732 - 8) + 8);
// }
// console.log(arr);
//
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2 = arr[i] * 5;
//     console.log(arr2)
//
// }







// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
// let arr = ["tesla", true, false, 84, 94, 'Volvo' ];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] =='number') {
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2);






//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
//
// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let arr2 = [];
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.id = city;
//             arr2.push(user)
//         }
//     }
// };
// console.log(arr2)









//  - Взяти масив з 10 чисел або створити його.
//  Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [10, 15, 70, 22, 99, 14, 45, 13, 65, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }


// - Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [10, 15, 70, 22, 99, 14, 45, 13, 65, 10];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i]);
// }
// console.log(arr2);
//




//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
//
// let arr2=[];
// for (let i = 0; i < arr.length; i++) {
//     arr2 =  arr2+arr[i] ;
// }
// console.log(arr2)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let arr2=[];
// let i = 0;
// while (i < arr.length) {
//     arr2 =  arr2+arr[i] ;
//     i++;
// }
// console.log(arr2)



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let arr2 = [];
// for (const array of arr) {
//     arr2 =  arr2 + array ;
// }
// console.log(arr2)