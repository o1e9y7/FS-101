/*
 * Метод window.setTimeout(callback, delay, args)
 */

// function sayHello() {
//   console.log('Hello world');
// }

// setTimeout(sayHello, 200);
// setTimeout(sayHello, 1000);
// setTimeout(sayHello, 3000);

// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

/* const timeoutId = setTimeout(() => {
  console.log('Hello 1');
}, 5000);

setTimeout(() => {
  console.log('hello 2');
}, 2000);

setTimeout(() => {
  console.log('hello 3');
}, 4000);

clearTimeout(timeoutId); */

/**
 * Можливість передати параметри для колбеку
 */

// for (let i = 0; i < 150000; i++) {
//   //   setTimeout(sayHello, i * 1000, i);
//   setTimeout(() => {
//     sayHello(i, 10, 20);
//   }, 5000);
 
// }

// function sayHello(i) {
//   console.log(i);
// }

// const elements = ['apple', 'banana', 'orange', 'apple', 'apple', 'grape', 'banana', 'kiwi', 'orange', 'pear', 'strawberry'];

// function findUnique(elements) { 
//   const noRepeateElements = elements.filter((element, index) => {
//     return elements.indexOf(element) === element.lastIndexOf(element);
//   })
//   return noRepeateElements;
// }

// console.log(findUnique(elements))

// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// function calculateSum(numbers) {
//   for (let number of numbers) {
//     sum += number;
//   } 
//   return sum
// }
// console.log(calculateSum(numbers));

//  function calculateSum(numbers) {
//   return numbers.reduce((accum, currentValue) => accum + currentValue)
// } 
// console.log(calculateSum(numbers));

// const numbers = [12, 5, 27, 8, 19, 50, -3];
// function findMinMax(numbers) {
//   let min = numbers[0]; // Початкове значення мінімального числа
  
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i]; // Оновлення мінімального числа, якщо поточний елемент менший
//     }
//   }

//   return { min }; // Повертаємо об'єкт з максимальним і мінімальним числами
// }

// console.log(findMinMax(numbers)); 


// const promise = new Promise(() => {
//   console.log('Hello world')
// })
// console.log(promise)  // Ста

// Створення проміса


// let myPromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     let condition = false; 

//     if (condition) {
//       resolve('Виконано!')
//     } else {
//       reject('Помилка')
//     }
//   }, 2500 )
// })

// myPromise.then((successMessage) => {
//   console.log('Успіх: ' + successMessage);
// }).catch((errorMassage) => {
//   console.log('Помилка: ' + errorMassage)
// })
// const {resolveBaseUrl} = require('vite')

// const promise = new Promise((resolve, reject) => {
  
//   setTimeout(() => {
//     const randome = Math.random();
//     if (randome > 0.5) {
//     resolve(console.log('Круто працює!'))
//     } else {
//     reject(console.log('не працює але також круто!'))
//     }
//   console.log(randome)
// }, 1000)

// })


// //=======


// promise
//   .then(() => {
//     console.log('Дія дія дія')
//   })
//   .catch(() => {
//     console.log('ех... не спраювало')
//   });

// function onFulFilled() {
//   console.log('Дія дія дія')
// }

// function onRejected() {
//   console.log('ех... не спраювало')
// }

// console.log(promise)

// const promise = new Promise((resolve, reject) => {
//   let randome = Math.random();
//   if ( randome > 0.5) {
//     resolve('10');
//   } else {
//     reject('Sorry')
//   }
//  console.log(randome)
// });

// promise
//   .then(value => {
//     console.log(value)
//   })
//   .catch(error => {
//     console.log(error)
//   }).finally(() => {
//     console.log('Кінець')
//   })
// console.log(promise)

// const promise = new Promise((resolve, reject) => {
//   let randome = Math.random();
//   if ( randome > 0.5) {
//     resolve('10');
//   } else {
//     reject('Sorry')
//   }
//  console.log(randome)
// });


// promise
//   .then(() => {
  
// })
// .catch(() => {
  
// })
// .filter(() => {
  
// }) 



// ДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗ
// function createPromise(delay, state, value) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === 'green') {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise(5000, 'green', 'p1');
// const p2 = createPromise(2000, 'red', 'p2');
// const p3 = createPromise(4000, 'green', 'p3');

// p1.then(onFulFilled).catch(onRejected)
// p2.then(onFulFilled).catch(onRejected)
// p3.then(onFulFilled).catch(onRejected)

// function onFulFilled(data) {
//   console.log(`ok -${data}`)
// }

// function onRejected(data) {
//   console.log(`not ok -${data}`)
// }

// console.log(p1)
// console.log(p2)
// console.log(p3)
// ДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗДЗ


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     setTimeout(() => {
//     console.log(value); // 5
//     }, 2000)
    
//     return value * 2;
//   })
//   .then(value => {
//     setTimeout(() => {
//     console.log(value); // 10
      
//     }, 3400)
//     return value * 3;
//   })
//   .then(value => {
//     setTimeout(() => {
//     console.log(value); // 30
      
//     },4400)
//   })
//   .catch(error => {
//     setTimeout(() => {
//     console.log(error);
      
//     }, 3600)
//   })
//   .finally(() => {
//     setTimeout(() => {
//     console.log("finally");
      
//     }, 5000)
//   });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 10000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(0), 300);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(6), 500);
// });


// Promise.race([p1, p2, p3, p4])
// 	.then(value => console.log(value, 'все ок')) // 1
// 	.catch(error => console.log(error, `Помилка`));


