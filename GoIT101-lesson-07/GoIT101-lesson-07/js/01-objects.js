/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const playlist = {
//   name: "My amazing playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   isFavourite: true,
// };

// console.log(playlist);
// console.log(playlist.name);
// console.log(playlist.rating);
// playlist.newProp = "something new";
// playlist.rating = 4;

// /**
//  * -----------------------------------
//  */
// const propertyName = "tracks";

// console.log(playlist[propertyName]);
// console.log(playlist["rating"]);

// /**
//  * -----------------------------------
//  */
// function foo(values) {
//   console.log(values);
//   console.log(values.a);
//   console.log(values.b);
// }

// foo({
//   a: 5,
//   b: 10,
// });

// function makeTransaction(quantity, prisePerDroid) {
//   const sum = quantity * prisePerDroid; 
//   return `You ordered ${quantity} droids worth ${sum} credits!`
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
// console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// function getShippingMessage(country, prise, deliveryFee) {
//   const sum = prise + deliveryFee;
//   return `Shipping to ${country} will cost ${sum} credits`

// }


// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
// console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// function getElementWidth(content, padding, border) {
//   content = content.replace(',', '.');
//   padding = padding.replace(',', '.')
//   border = border.replace(',', '.')
//   const a = Number.parseFloat(content)
//   const b = Number.parseFloat(padding)
//   const c = Number.parseFloat(border)
//   console.log( a, b, c)
//   return a + b*2 + c*2 
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200


// let password = '321541850'  ;
// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//    const p = password === correctPassword ? "Access granted" : "Access denied, wrong password!";
// return p
// }

// console.log(checkPassword(password))
// // console.log(p)

// let day = "Wednesday";
// let message;

// switch (day) {
//   case "Monday":
//     message = "It's Monday!";
//     break;
//   case "Tuesday":
//     message = "It's Tuesday!";
//     break;
//   case "Wednesday":
//     message = "It's Wednesday!";
//     break;
//   case "Thursday":
//     message = "It's Thursday!";
//     break;
//   case "Friday":
//     message = "It's Friday!";
//     break;
//   default:
//     message = "It's weekend!";
// }

// console.log(message); // "It's Monday!"


// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0
//       break
//     case 'professional':
//       return 20 
//       break
    
//     case 'organization':
//       return 50 
//       break
//     default:
//       return 'Invalid subscription type!'
//   }
 
// }

//  console.log(getSubscriptionPrice("professional")) // 20
//  console.log(getSubscriptionPrice("organization")) // 50
//  console.log(getSubscriptionPrice("starter")) // 0
//  console.log(getSubscriptionPrice("random")) // "Invalid subscription type!"
//  console.log(getSubscriptionPrice("premium")) // "Invalid subscription 


// function checkFileExtension(fileName, ext) {
//  if (fileName.endsWith(ext)) {
//    return 'File extension matches'
// } else {
//    return 'File extension does not match'
// }
// }


//  console.log(checkFileExtension("styles.css", ".css")) // "File extension matches"
//  console.log(checkFileExtension("styles.css", ".js")) // "File extension does not match"
//  console.log(checkFileExtension("app.js", ".js")) // "File extension matches"
//  console.log(checkFileExtension("app.js", ".html")) // "File extension does not match"
//  console.log(checkFileExtension("index.html", ".html")) // "File extension matches"
//  console.log(checkFileExtension("index.html", ".css")) // "File extension does not match"
//  console.log(checkFileExtension("index.html", ".js")) // "File extension does not 

// function getFileName(file) {
//   const fileIndex = file.indexOf('.')
//     if (fileIndex === -1) {
//         return file  
//     } else {
//         return file.slice(0,fileIndex)
//     }
// }


// console.log(getFileName("styles.css"))
// console.log(getFileName("app.js"))  
// console.log(getFileName("app"))
// console.log(getFileName("index.js"))
// console.log(getFileName("index.html"))
// console.log(getFileName("index.css"))
// console.log(getFileName("index"))


// function createFileName(name, ext) {
//   const nameT = name.trim()
//   return nameT + '.'+ ext
// }


// console.log()

// console.log(createFileName(" order ", "txt")) // "order.txt"
// console.log(createFileName("report ", "csv")) // "report.csv"
// console.log(createFileName(" presentation", "xml")) // "presentation.xml"

 
// function firstLetter(let1, let2) {
//     const firstLet1 = let1.charAt(0) ;
//     const firstLet2 = let2.charAt(0);
//     console.log(firstLet1)
//     console.log(firstLet2)
//     if (firstLet1 === firstLet2) {
//         return 'ці літери однакові'
//     } {
//         return 'ці літери різні'
//     }

// }



// console.log( firstLetter('sdlet1', 'let2'))

// function lastLetter(word) {
//     const firstLet1 = word.charAt(word.length -1)
//     if (firstLet1 === 'ь') {
//         return word.charAt(word.length -2)
//     } else {
//         return word.charAt(word.length -1)
//     }
// }


// console.log(lastLetter("jbkblb"))

// function calculateTotal(number) {
//     //   debugger;
//   let total = 0;
//     for (let i = 0; i <= number; i++){
//      total += i
    
//     }
//     return total
// }

// // console.log(calculateTotal(5))
// function calculateEvenTotal(number) {
//     // debugger;
//     let sum = 0;
//     let i = 0;
//   while ( i <= number){
//       sum += i;
//       i += 2;
//     }
//     return sum;
// }

// console.log(calculateEvenTotal(1))//0
// console.log(calculateEvenTotal(3))//2
// console.log(calculateEvenTotal(7))//12
// console.log(calculateEvenTotal(18))// 90
// console.log(calculateEvenTotal(27))// 182



// const numbers = [5, 10, 15, 20, 25]

// const filterNum = numbers.filter((item) => item < 20 && item >10)

// console.log(filterNum)

// function fnA(str, callback) {
//     console.log('totot');
//     console.log('lalala');
//     console.log('Hello world');
//     console.log(callback(str));
// }

// function fnC(str) {
//  return `Hi ${str}`
// }


// function fnB(str) {
//     return `Hello ${str}`;
// }

// // fnA(userName);

// // fnA('Alice', fnB)
// fnA('Alice', fnC)

// =========================================

// function calc(a, b, callback) {
//     const res = callback(a, b)
//     console.log(callback)
//     console.log(res)
// }

// calc(2, 5, function (x, y) {
//     return x + y;
// })

// calc(8, 3, function (x, y) {
//     return x - y;
// })

// calc(500, 325, function (x, y) {
//     return x / y;
// })
// =========================================

// function calc(a, b, callback) {
//     // const a = 5; 
//     // const b = 10;
//     const res = callback(a, b)
//     // console.log(callback(a,b))
//     console.log(res)

// }
// calc(5, 10, function (totot, lalala) {
//     return totot + lalala;
// })

// =========================================


// function each(array, callback) {
//     const newArr = [];
//     for (const item of array) {
//         // console.log(callback(item));
//         newArr.push(callback(item))
//     }
//     return newArr
// }

// console.log(each([64, 49, 25, 16, 4], function(value){
//     return value * 2;
// }));


// console.log(each([64, 49, 25, 16, 4], function(num){
//     return num - 10;
// }));

//  console.log(each([64, 49, 25, 16, 4], function(num){
//      return Math.sqrt(num);
// }));

 
// =========================================


// // // // ЯВНЕ ТА НЕ ЯВНЕ ПОВЕРНЕННЯ ПОВЕРНЕННЯ РЕЗУЛЬТАТУ ФУНКЦІЇ
//  НЕЯВНИМ СПОСОБОМ ЦЕ КОЛИ НЕ ВКАЗАНЕ КЛЮЮЧОВЕ СЛОВО RETURN// ЯВНЕ ПОВЕРНЕННЯ ЦЕ З RETURN 
// const add = (a, b, c) => a + b + c;
// console.log(add(5, 10, 15))



// const add1 = a => a + 50;
// console.log(add1(5))



// const add3 = () => 50;
// console.log(add3(4))

// =========================================


// function fnA() {
//     return {
//         a: 5
//     }
// }

// console.log(fnA())


// для того що повернутив стрілочній функції обєкт
//  порібно тіло огорнути в дужки 
// const fnB = () => ( { 
//         a: 5
//     })

// console.log(fnB())



// короткий запис ключа та значення в масиві 
// const fnC = a => ({
//     a
// })
// console.log(fnC(50))

// =========================================
 

// // метод forEach перебирає наш масив, цей метод нічого не повертає 
// const numbers = [64, 49, 25, 16, 4]
// // стандартний запис
// numbers.forEach(function (number, index, arr)  {
//     console.log(
//         `number: ${number};index: ${index};`,'array', arr);
// });


// // стрілочна функція 
// let total = 0;
// numbers.forEach (item => {
//     console.log(`number: ${item}`);
//     total += item
// });
// console.log(total)

//=====================================
// const logItems = (item) => {
//     item.forEach((items, index) => {
//     console.log(`${index +1}: ${items}`)
//     })
//     console.log(item)
// }

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['-', '+', '=', '/', '%'])
//=====================================

// function printContactsInfo({ names, phones }) {
//     const namesArr = names.split(',');
//     const phonesArr = phones.split(',');
//     for (let i = 0; i < namesArr.length; i++) {
//         console.log(`${namesArr[i]}: ${phonesArr[i]}`)
//     }

// }



// // Виконано рефакторинг коду
// const printContactsInfo = ({names, phones}) => {
//     const namesArr = names.split(',');
//     const phonesArr = phones.split(',');
//     console.log(namesArr, phonesArr)
//     namesArr.forEach((item, i) => {
//         console.log(`${item} - ${phonesArr[i]}`)
//     })
  
// }

  
// // 
// printContactsInfo({
//     names: 'Jacob,William,Solomon,Ben',
//     phones:'897925854,126874854,890048964,893589854'
// })

//=====================================

// // Виконано рефакторинг коду
// function calculateaverage(...args) {
//     let total = 0;
//     for (let i = 0; i < args.length; i++){
//         total += args[i];
//     }
//     return total / args.length;
// }


// const calculateaverage = (...args) => {
//     // console.log(args)
//     let tot = 0;
//      args.forEach((value) => {
//         tot += value;
//     })
//     return tot / args.length;
// }

// console.log(calculateaverage(1, 2, 3, 4));
// console.log(calculateaverage(14, 8, 2));
// console.log(calculateaverage(27, 43, 2, 8, 36));


//=====================================

// метод map завжди поверне масив такої ж довжини. 


// const allCars = [
//   { model: 'Toyota Camry', brand: 'Toyota', year: 2022, price: 25000 },
//   { model: 'Honda Civic', brand: 'Honda', year: 2021, price: 22000 },
//   { model: 'Ford Mustang', brand: 'Ford', year: 2020, price: 35000 },
//   { model: 'BMW X5', brand: 'BMW', year: 2019, price: 45000 },
//   { model: 'Mercedes-Benz E-Class', brand: 'Mercedes-Benz', year: 2018, price: 40000 },
//   { model: 'Audi A4', brand: 'Audi', year: 2020, price: 38000 },
//   { model: 'Chevrolet Silverado', brand: 'Chevrolet', year: 2021, price: 30000 },
//   { model: 'Nissan Altima', brand: 'Nissan', year: 2023, price: 26000 },
//   { model: 'Tesla Model S', brand: 'Tesla', year: 2022, price: 60000 },
//   { model: 'Subaru Outback', brand: 'Subaru', year: 2023, price: 28000 }
// ];

// const getModel = (cars) => {
//     const res = [];
//     cars.forEach((car) => {
//         // console.log(car.model)
//         res.push(car.model)
//     })
//     return res
// }

// console.log(getModel(allCars));


// рефакторинг
// const getModel = (cars) => {
//  return cars.map((item) => item.model)
// }

// console.log(getModel(allCars));




// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map (car => {
//         return {
//             ...car,
//             price: car.price * (1 - discount)
//         }
//     })
// }


// console.log(makeCarsWithDiscount(allCars, 0.2));

//=====================================


// const players = [
//     { 
//         id: 'player_1',
//         nickname: 'Liverpool',
//         playedTime: 300, 
//         score: 1000, 
//         isOnline: true 
//     },
//     { 
//         id:  'player_2',
//         nickname: 'Poly',
//         playedTime: 186, 
//         score: 1200, 
//         isOnline: false 
//     },
//     { 
//         id: 'player_3',
//         nickname: 'Kivi',
//         playedTime: 128, 
//         score: 800, 
//         isOnline: true 
//     },
//     { 
//         id: 'player_4',
//         nickname: 'Ajax',
//         playedTime: 60, 
//         score: 1500, 
//         isOnline: true 
//     },
//     { 
//         id:  'player_5',
//         nickname:'Mango',
//         playedTime: 150, 
//         score: 600, 
//         isOnline: false 
//     }
// ];


// const playerIdTOUpdate = 'player_1';

// const update = (arr, myId, time ) => {
//     return arr.map((item) => {
//         if (item.id === myId) {
//             return {
//                 ...item,
//                 playedTime: item.playedTime + time
//             }
           
//         }
    
//         return item;
            
        
//     })

// }

// console.log(update(players, playerIdTOUpdate, 366))

//=====================================


// const tweets = [
//     { 
//         id: 1,
//         likes: 25,
//         tags: ['JavaScript', 'HTML', 'CSS']
//     },
//     { 
//         id: 2,
//         likes: 40,
//         tags: ['Python', 'Django', 'Flask']
//     },
//     { 
//         id: 3,
//         likes: 18,
//         tags: ['Java', 'Spring', ['Hibernate',['d','f','g']]]
//     },
//     { 
//         id: 4,
//         likes: 35,
//         tags: ['C++', 'OpenGL', 'Qt']
//     },
//     { 
//         id: 5,
//         likes: 30,
//         tags: ['Ruby', 'Rails']
//     }
// ];

// // розгортає масиви тільки першого рівня вкладеності 
// const res = tweets.flatMap(item => item.tags);

// console.log(res)




// class Car {
//     #price;
    
//     static qty = 0;
//     static increment() {
//         Car.qty += 1;
//     }
// // конструтор звертається до екземпляру 
//    constructor({brand, model, price}) {
      
//        this.brand = brand;
//        this.model = model;
//        this.#price = price;
//        Car.increment()
        
//    }
   
//     get price() {
//         return this.#price; 
//     }
    
//     set price(newPrice) {
//         if (this.#checkType(newPrice, 'number')) {
//             this.#price = newPrice;
//             return;
//         }
//         console.log('Not a number');

//     }


//     // приватний метод 
//     #checkType(data, type) {
//         if (typeof data !== type) {
//             return false
//         } 
//         return true
    
// }
// }



// const audi = new Car({brand:'audi',model: 'q7', price: 25000}) // екземпляр класу 
// const bmw = new Car({brand:'BMW', model:'320', price: 10000}) // екземпляр класу 
// const honda = new Car({brand:'HONDA', model:'civic', price: 15000}) // екземпляр класу 


// audi.price = 8888;

// // console.log(audi.getBrand())
// // console.log(audi.getPrice())
// console.log(audi.price)
// console.log('audi', audi)
// console.log('BMW', bmw)
// console.log('Honda', honda)
// console.log(Car.qty)