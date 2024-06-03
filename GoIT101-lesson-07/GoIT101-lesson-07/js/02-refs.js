/**
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

/**
 * --------------------------
 */

// console.log([1, 2, 3] === [1, 2, 3]);
// console.log({ a: 5 } === { a: 5 });

// const obj = {
//   a: 5,
//   b: 10,
// };

// const objCopy = obj;

// console.log(obj === objCopy);

// objCopy.a = 100;

// console.log(obj.a);

// const arr = [1, 2, 3];

// arr.myOwnProp = "hi there";

// arr[3] = 4
// arr[100] = 101

// console.log(arr);

// function foo() {
//   console.log("hello");
// }

// foo.myOwnProp = "i'm in function!";

// console.dir(foo);


//========================================
// 
// const user = {
//     userName: 'Alise',
//     showThis() {
//     console.log('this', this)
//     }

    // showThis: () => {
    //     console.log('this', this);
    // }
    // showThis() {
    //     const foo = () => {
    //         console.log('foo', this)
    //     }
    //     foo()
    // }
// }

// user.showThis();

//========================================

// const user1 = {
//     userName: 'Peter'
// }

// user1.showThis = user.showThis;
// user1.showThis();
//========================================









// class Car  {
//     constructor(brand, model) {
//         this.brand = brand; // звернення до екземпляру const audi = new Car('Audi', 'Q7')
//         this.model = model;
//     }
// }
// const audi = new Car('Audi', 'Q7')

// console.log('Audi', audi)
// ДЗ МОДУЛЬ № 3 завдання №1
// function slugify(titel) {
//     const text = titel.toLowerCase().split(' ');
//     return text.join('-')
// }



// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
// ДЗ МОДУЛЬ № 3 завдання №1


// ДЗ МОДУЛЬ № 3 завдання №2
// function makeArray(firstArray, secondArray, maxLength) {
//     const arr = firstArray.concat(...secondArray)
//     if (arr.length > maxLength) {
    
//         return arr.slice(0, maxLength)
        
//     }
//     return arr
// }



// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// ДЗ МОДУЛЬ № 3 завдання №2


// ДЗ МОДУЛЬ № 3 завдання №3
// function filterArray(numbers, value) {
//    
//     const arr = [];
//     // for (let i = 0; i < numbers.length; i++) {
//     //     if (numbers[i] > value) {
//     //          arr.push(numbers[i])
//     //     }
//     // }
//     for (let number of numbers) {
//         if (number > value) {
//             arr.push(number)
//         }
//     }
//         return arr;

// }


// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// ДЗ МОДУЛЬ № 3 завдання №3


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// function getProductPrice(productName) {
  
// for (let product of products) {
//   if (product.name === productName){
//     return product.price
//   }
    
// }
//     return null;
// }
// console.log(getProductPrice("Radar") )//  1300

// console.log(getProductPrice("Grip")) //  1200

// console.log(getProductPrice("Scanner")) //  2700

// console.log(getProductPrice("Droid") )//  400

// console.log(getProductPrice("Engine")) //  null.\


//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// function getAllPropValues(propName) {
//     const arr = [];
//     for (let product of products) {
//         if (product.hasOwnProperty(propName)) {
//            arr.push(product[propName]) 
//         } 
    
        
// console.log(product[propName])
//     }
//     return arr
// }
   

// console.log(getAllPropValues("name")) // ["Radar", "Scanner", "Droid", "Grip"
// console.log(getAllPropValues("quantity")) // [4, 3, 7, 9
// console.log(getAllPropValues("price")) // [1300, 2700, 400, 1200
// console.log(getAllPropValues("category")) // []


// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//        return this.potions
//     },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                potion.name = newName
//             }
//         }
//         return this.potions;    
//     }
   
// }

// console.log(atTheOldToad.updatePotionName("Speed potion", "Polymorth")) //[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility")) // [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]


// function addOverNum(value, ...args) {
//     let sum = 0;
//     for (let i = 0; i <= args.length; i++) {
//         if (args[i] > value) {
//         sum += args[i]
//         }
       
//     }
//      return sum
// }

//  console.log(addOverNum(50, 15, 27)) // 0
//  console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)) // 71
//  console.log(addOverNum(15, 32, 6, 13, 19, 8)) // 51
//  console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)) // 218

// function getExtremeScores(...scores) {
//     const result = {
//      best : Math.max(...scores),
//      worst: Math.min(...scores)
//      }
//     return result
// }


// console.log(getExtremeScores(58, 56, 30, 2))



// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const arr = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores]
//  const result = {
//      best : Math.max(...arr),
//      worst: Math.min(...arr)
//  }
     
//  console.log(result)





// ДЗ МОДУЛЬ № 4 завдання №1
// function isEnoughCapacity(product, containerSize) {
//     let sum = 0;
//     for (let key in product) {
//         sum += product[key];
//     }
//     if (sum <= containerSize) {
//             return true;
            
//         } else {
//             return false;
//         }
// }

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false

// ДЗ МОДУЛЬ № 4 завдання №1


// ДЗ МОДУЛЬ № 4 завдання №2




// function calcAverageCalories(days) {
//     let sum = 0;
//     for (let day of days) {
//         sum += day.calories / days.length
//     //    console.log(days.length)
        
//     }
//      return sum 
// };

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0
// ДЗ МОДУЛЬ № 4 завдання №2


// ===========================================
// const users = [
//     { name: "Андрій", online: true },
//     { name: "Олена", online: false },
//     { name: "Іван", online: true },
//     { name: "Марія", online: false },
//     { name: "Петро", online: true },
//     { name: "Оксана", online: false },
//     { name: "Василь", online: true },
//     { name: "Наталія", online: false },
//     { name: "Євгенія", online: true },
//     { name: "Артем", online: false }
// ];




// function findByName(arr, name) {

//     for (const item of arr) {
  
//         if (item.name.toLowerCase() === name.toLowerCase()) {
//             return item;
//         }
//     }
//     return 'not found'
// }

// console.log(findByName(users, "марія"))

// function getAllName(arr) {
//     const names = [];
//     for (const item of arr) {
//         // console.log(item)
//         names.push(item.name) 
//     }
//     return names;
// }


// console.log(getAllName(users))
// ===========================================


// function getOnlineFriends(arr) {
//     const friendsOnline = [];
//     for (const item of arr) {
//         if (item.online) {
//             friendsOnline.push(item.name)
//         } 
       
//     }
//     return friendsOnline
// }

// console.log(getOnlineFriends(users))

 

// ДЗ МОДУЛЬ № 4 завдання №3
// const profile = {
//     username: "Jacob",
//     playTime: 300,
//     changeUsername(newName) {
//         this.username = newName
//         // console.log(profile)
//     },
//     updatePlayTime(hours) {
//         this.playTime += hours
//     },
//     getInfo() {
//         return `${this.username} has ${this.playTime} active hours! `
//     }
// };

// profile.changeUsername('Piter')
// profile.updatePlayTime(10)
// console.log(profile.getInfo())
// console.log(profile)



// ДЗ МОДУЛЬ № 4 завдання №3





// ДЗ МОДУЛЬ № 5 завдання №1




// const getUserNames = (users) => {
//     let sum = [];
//     users.forEach((value) => {
//     sum.push(value.name)
// })
//     return sum;
// }

// console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// ДЗ МОДУЛЬ № 5 завдання №1


// ДЗ МОДУЛЬ № 5 завдання №2


// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName));
// }



// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []




// ДЗ МОДУЛЬ № 5 завдання №2




// const numbers = [5, 12, 4, 5, 54, 45]

// const filterNum = numbers.filter((item) => item < 20 && item > 10);
// console.log(filterNum)


// ДЗ МОДУЛЬ № 5 завдання №3
// const sortByDescendingFriendCount = (users) => {
//    return users.toSorted((a, b) => b.friends.length - a.friends.length)

// }







// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male"
// //   }
// // ]

// ДЗ МОДУЛЬ № 5 завдання №3




// ДЗ МОДУЛЬ № 5 завдання №4

// const getTotalBalanceByGender = (users, gender) => {
//         let sum = 0;

//     users.forEach((user) => {
//         if (user.gender === gender) {
//             sum += user.balance;
//         }
       
//     })
//     return sum;
// }

// const getTotalBalanceByGender = (users, gender) => {
//     return users
//         .filter(user => user.gender === gender)
//         .reduce((totalBalance, user) => totalBalance += user.balance, 0)
    
// }



// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863


// // ДЗ МОДУЛЬ № 5 завдання №4


// const numbers = [5, 10, 15, 20, 25]

// const total = numbers.reduce((acc, item) =>  acc + item, 0)

// console.log(total)

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax:150
// }

// const total = Object.values(salary).reduce(
//     (acc, item) => acc + item,0
// )

// console.log(total)



// const players = [
//     { id: 1, name: "Андрій", timePlayed: 120, online: true },
//     { id: 2, name: "Богдан", timePlayed: 80, online: false },
//     { id: 3, name: "Віктор", timePlayed: 200, online: true },
//     { id: 4, name: "Ганна", timePlayed: 150, online: false },
//     { id: 5, name: "Дмитро", timePlayed: 90, online: true },
//     { id: 6, name: "Євгенія", timePlayed: 180, online: false },
//     { id: 7, name: "Жанна", timePlayed: 110, online: true },
//     { id: 8, name: "Зіновій", timePlayed: 130, online: false },
//     { id: 9, name: "Ірина", timePlayed: 170, online: true },
//     { id: 10, name: "Костянтин", timePlayed: 140, online: false }
// ];


// // const total = players.reduce((acc, player) => {
// //     return acc += player.name

// // }, [])

// const playerName = () => {
//     return players.map(player => player.name)
// }


// console.log(playerName(players));



// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;







// практика заняття 6 -2 
// class Car {

//     #price
//     static qty = 0;
//     static increment() {
    
// }


//     constructor({brand, model, price}) {
//         this.brand = brand;
//         this.model = model;
//         this.#price = price;
//         // console.log('brand', brand)
//         // console.log('model', model)
//     }
    
//     getBrand() {
//         return this.brand;
//     }

//     get price() {
//         return this.#price;
//     }
  
//     set price(newPrice) {
//         // if (typeof newPrice !== 'number') {
//         //     console.log('Not a number')
//         //     return;
//         // }
//         // this.#price = newPrice;

//         if (this.#checkType(newPrice, 'number')) {
//             this.#price = newPrice;
//             return
//         }
//         console.log('Not a number')
        
//     }



//     #checkType(data, type) {
//         {
//             if (typeof data !== type) {
//                 return false;
//             }
//                 return true;
            
//     }}
//  }


 
// const audi = new Car({ brand: 'audi', model: 'q7', price: 50000});
// const honda = new Car({brand:'honda', model: 'civic',price: 35000});

// audi.price = 45500 
// console.log('honda', honda)
// console.log('audi', audi)
// console.log(honda.price)


/// ПОВТОР 

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






// class Hero {
//     constructor(params){
//         this.name = params.name
//         this.xp = params.xp
        
//     }

//     gainXp(amounth) {
//         console.log(`${this.name} received ${amounth} xp`)
//         this.xp += amounth;
//     }
// }

// // успадковує властивості та методи у класу Hero
// class Warrior extends Hero {

//     constructor({ name, xp, weapon }) {
//         super({name, xp})
//         this.weapon = weapon;
//     }
//     attack() {
//         console.log(`${this.name} attacks`)
//     }
// }


// const arthas = new Warrior({ name: 'Arthas', xp: 1000, weapon: 'sword' })
// // arthas.gainXp(243)
// // arthas.attack()
// // console.log(arthas)

// class Archer extends Hero {
//     constructor({arrow, ...respProps }) {
//         super(respProps)
//         this.arrow = arrow;
//     }
// }

// const robin = new Archer({ name: 'Robin', xp: 600, arrow: 'bow' })

// console.log(robin)

// function foo() {
//     console.log('this', this)
// }

// const user = {
//     userName: 'Alice',
//     // showThis() {
//     // console.log('this', this)
       
//     // }
//      showThis() {
//          const foo = () => {
//         console.log(this)
//     }
//        foo()
//     }
// }

// user.showThis();
// 'use strict';

// function showName() {
//     console.log('this', this)
//     // console.log('userName', this.userName)
// }

// showName();

// const user = {
//     userName: 'Kate',
//     age: 26,
//     showThis() {
//         console.log(this)
//         // console.log(this.userName)
//     }
// }

// function foo(callback) {
//     callback();
// }

// foo(user.showThis);

// function logger(a, b, callback) {
//     console.log(callback(a,b))
// }
// function sum(a, b) {
//     return a + b;
// }

// logger(a,b, sum)





/// !!!! ПОТРІБНА ПРАКТИКА 
// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         {name: 'Diamond', price:2700 , quantity:  3},
//         {name:'Sapphire' , price: 1400, quantity: 7 },
//         { name: 'ruby', price: 800, quantity: 2 }
//     ],

//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find((item) =>
//             item.name.toLocaleLowerCase() === stoneName.toLocaleLowerCase()
//         );
//         if (!stone) {
//             return `${stoneName} not found`
//         }
//         return stone.price * stone.quantity
//     }  
//  }
 

//  console.log(chopShop.calcTotalPrice('emerald'))

/// !!!! ПОТРІБНА ПРАКТИКА 

/// НАЛАШТУВАННЯ ВЗАЄМОДІЇ ЦІЄЇ УНКЦІЇ З ОБЄКТОМ 'objA'
// function showThis(a,b) {
//     console.log(a,b)
//     console.log('this', this.userName)
// }


// const objA = {
//     userName: 'Oleg'
// } 

// const objB = {
//     userName: 'Anastasiya'
// } 

// objA.showThis = showThis;


// // метот call до функції привязує контекст який він отримує як перший аргумегнт. 
// // далі можна передати як агумент дані через кому після привязки   
// showThis.call(objA, 5, ['hello', 'world'])
// showThis.call(objB)

// // працює так само як і call але як аргумент псля привязки приймає тільки масив
// showThis.appy(objB, ['hello', 'world', {a: 'dog'}])
/// !!!! ПОТРІБНА ПРАКТИКА 






// ПРАКТИЧНЕ ЗАСТОСУВАННЯ МЕТОДУ call , apply ТА bind

// function changeColor(color) {
//     console.log('this', this)
//     this.color = color
// }

// const hat = {
//     color: 'black',
//     name: 'hat'
// }

// const sweater = {
//     color: 'green',
//     name: 'sweater'
// }


 
// changeColor.call(hat, 'red')
// console.log(hat)

// changeColor.apply(sweater, ['grey'])
// console.log(sweater)



// метод bind створив копію функції привязав до неї контекст hat
// але він її не викликав 
// const changeHatColor = changeColor.bind(hat)

// // тепер робимо затребуваний виклик функції(для виклику використовуємо константа в яку зберегли метод bind ) 

// const changeSweaterColor = changeColor.bind(sweater)



// changeHatColor('blue')
// changeSweaterColor('white')

// console.log('hat',hat)
// console.log('sweater', sweater)







// const counter = {
//     value: 0,
//     increment(num) {
//         console.log('this', this);
//         this.value += num;
//     },
//     decrement(num) {
//         console.log('this', this);
//         this.value -= num;
//     }
    

// }


// function foo(num, callback) {
//     // console.log(callback)
//     callback(num)
// }

// // foo(10, counter.increment.bind(counter));
// // foo(2, counter.decrement.bind(counter));

// foo(10, counter.increment.bind(counter));
// foo(2, counter.decrement.bind(counter));

// console.log(counter)

// ПРАКТИЧНЕ ЗАСТОСУВАННЯ МЕТОДУ call , apply ТА bind




// ПРОТОТИПИ 
// const animal = {
//     legs: 4, 
    
// }
// // власні та не власні властивості обєкта. 
// // Власні ті які є безпосередньо в обєкта не власні які успадковуються у прототипа 
// // створюємо обєкт cat із прототипом animal
// const cat = Object.create(animal)
// cat.name = 'Puliya'

// for (const key in cat) {
//     console.log(key)
    
// }


// console.log(animal)
// console.log(cat)
// console.log(animal.name)
// console.log(cat.legs)


// const objC = { c: 'objC' }

// const objB = Object.create(objC);
// objB.b = 'objB'
// const objA = Object.create(objB);
// objA.a= 'objA'

// console.log(objA)

// .........................................................
// const cruiseControl = {
//     speed: 0,
//     brand: 'Audi',
//     accelerate(num) {
//         this.speed += num;
//         console.log(`Автомобль ${this.brand} прискорився. Швидкість ${this.speed} км/год`)
//     },
//     decreace(num) {
//         this.speed -= num;
//         if (this.speed <= 0) {
//             console.log('Авто зупинилось')
//             return;
//         }
       
//         console.log(`Автомобль ${this.brand} гальмує'. Швидкість ${this.speed} км/год`)
//     }


// }

// function foo(num, callback) {
//     callback(num)
//     console.log(num)
// }

// foo(125, cruiseControl.accelerate.bind(cruiseControl))
// foo(120, cruiseControl.decreace.bind(cruiseControl))



// console.log(cruiseControl)
// .........................................................


// const SPEED = 80;

// const BMW = {
//     brand: 'BMW',
//     speed: 30
// }

// const  Audi  = {
//     brand: 'Audi',
//     speed: 90
// }


// function speedSensor(maxSpeed) {
//     if (this.speed <= maxSpeed) {
//         return `Автомобіль ${this.brand} рухається з безпечною швидкістю`
        
//     }
//     return `Автомобіль ${this.brand} перевищує швидкість`
// }

// console.log(speedSensor.call(BMW, SPEED))
// console.log(speedSensor.apply(Audi, [SPEED]))
// .........................................................



/// HOME WORK 6(1; 2; 3)
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// class Storage {


//     constructor(item) {
//         this.items = item;
//     }

//     getItems() {
//         return this.items;
//     };
//     addItem(newItem) {
//         this.items.push(newItem) ;
        
//     };
//     removeItem(itemToRemove) {
//         const index = this.items.indexOf(itemToRemove)
//         if (index !== -1) {
//             this.items.splice(index,1)
//         }
//     }
// }


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// console.log(storage)


// class StringBuilder {
//      #value
//     constructor(initialValue) {
//         this.#value = initialValue;
//     }
    
//     getValue() {
//         return this.#value
//     }

//     padEnd(str) {
//         this.#value = this.#value.concat(str)
//     }

//     padStart(str) {
//         this.#value = str + this.#value
//     }

//     padBoth(str) {
//         this.#value = str + this.#value + str;
//     }

// }

// const builder = new StringBuilder(".");

// console.log(builder.getValue()); // "."

// builder.padStart("^");

// console.log(builder.getValue()); // "^."

// builder.padEnd("^");

// console.log(builder.getValue()); // "^.^"

// builder.padBoth("=");

// console.log(builder.getValue()); // "=^.^="
/// HOME WORK 6(1; 2; 3)
