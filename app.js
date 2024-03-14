// import { a, callMe } from "./app2.js";

// console.log(a);
// callMe();

// const num1 = prompt("Birirnchi soni kiriting");
// const num2 = prompt("Ikkinchi soni kiriting");
// const amal = prompt("Amalni  kiriting");
// const title = document.getElementById("title");
// switch (amal) {
//   case "+":
//     title.textContent = `${num1} + ${num2} = ${num1 + num2}`;
//     break;
//   case "-":
//     title.textContent = `${num1} - ${num2} = ${num1 - num2}`;
//     break;
//   case "/":
//     title.textContent = `${num1} / ${num2} = ${num1 / num2}`;
//     break;
//   case "*":
//     title.textContent = `${num1} * ${num2} = ${num1 * num2}`;
//     break;
//   default:
//     "bunday amal mavjud emas";
// }

// const li = document.getElementsByTagName("li");
// console.log(li);
// for (let i = 0; i < li.length; i++) {
//   li[i].style.color = "red";
// }

// const li = document.querySelectorAll("li");

// li.forEach((item) => {
//   let random = Math.trunc(Math.random() * 10);
//   item.textContent = random;
//   if (random % 2 == 0) {
//     item.style.background = "red";
//   } else {
//     item.style.background = "yellow ";
//   }
// });

// 1. getElementsByTagName
// const listItem = document.getElementsByTagName("body");
// console.log(listItem);

// 2. getElementByClassName
// const listItem = document.getElementsByClassName("listItem");
// console.log(listItem);

// 3. getElementById
// const bnt = document.getElementById("btn");
// console.log(bnt);

// 4. querySelektor /  querySelektorAll
// const listItem = document.querySelectorAll("li");
// listItem.forEach((item) => {
//   console.log(item);
// });

// 5. textContent
const title = document.getElementById("title");
title.textContent += " New Text";

const listItem = document.querySelectorAll(".listItem");
listItem.forEach((item) => {
  item.textContent += " darslari";
});

// 6. innerHTML
const bnt = document.getElementById("btn");
bnt.innerHTML = "<i>new text HTML<i>";

const names = ["Abror", "Samandar", "Ali"];
const ol = document.querySelector("ol");
names.forEach((name) => {
  ol.innerHTML += `<li>${name}<li>`;
});

// 7. getAttribure // setAttrebute
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.yandex.ru");
link.textContent = "Go to Yandex main page";

const text = document.querySelector("p");
console.log(text.getAttribute("class"));
text.setAttribute("class", "text");
text.setAttribute("style", "color: orange");

// 8. add // remove
const content = document.querySelector("p");
content.classList.add("succes");
