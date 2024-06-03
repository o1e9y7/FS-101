/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

const clickMe = document.querySelector(".js-click");
const box = document.querySelector(".js-box");
console.dir(clickMe)

clickMe.addEventListener("click", handleClick);

let step = 0;

function handleClick() {
  console.log("На кнопку було натиснуто!");
  step += 50;
  box.style.marginTop = `${step}px`;
  box.style.marginLeft = `${step}px`;
}



const click = document.querySelector(".js-click1");


click.addEventListener("click", handleClick1);



function handleClick1() {
  console.log("На кнопку було натиснуто!");
  step -= 50;
  box.style.marginTop = `${step}px`;
  box.style.marginLeft = `${step}px`;
}

