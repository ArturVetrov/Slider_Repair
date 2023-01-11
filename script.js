let images = [{
  src : "img/Rostov-on-Don-Admiral.png"
}, {
  src : "img/Sochi-Thieves.png"
}, {
  src : "img/Rostov-on-Don-Patriotic.png"
}];

let Admiral = new Object();
Admiral.city = `Rostov-on-Don </br> LCD admiral`;
Admiral.apart = "81 m2";
Admiral.time = "3.5 months";

let Sochi = new Object();
Sochi.city = `Sochi </br> Thieves`;
Sochi.apart = "105 m2";
Sochi.time = "4 months";

let Patriotic = new Object();
Patriotic.city = `Rostov-on-Don </br> Patriotic`;
Patriotic.apart = "93 m2";
Patriotic.time = "3 months";

let imgOut = document.querySelector(".img-output");
let sliderDots = document.querySelector(".slider-dots");

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const btnAdmiral = document.querySelector("#admiral");
const btnSochi = document.querySelector("#sochi");
const btnPatriotic = document.querySelector("#patriotic");

let city = document.querySelector(".city-text");
let apart = document.querySelector(".apart-text");
let time = document.querySelector(".time-text");
let cost = document.querySelector(".cost-text");

initImg();
initDots();

document.addEventListener("DOMContentLoaded", function() {
  city.innerHTML = Admiral.city;
  apart.innerHTML = Admiral.apart;
  time.innerHTML = Admiral.time;
});

function initImg() {
  images.forEach((image, index) => {
    let imgDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].src})"; data-index="${index}"></div>`
    imgOut.innerHTML += imgDiv;
  });
}

btnLeft.addEventListener("click", () => {
  let curNumber = +imgOut.querySelector(".active").dataset.index;
  let nextNumber;
  nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
  moveSlider(nextNumber);
});

btnRight.addEventListener("click", () => {
  let curNumber = +imgOut.querySelector(".active").dataset.index;
  let nextNumber;
  nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
  moveSlider(nextNumber);
});

btnAdmiral.addEventListener("click", ()=> {
  moveSlider(0);
});

btnSochi.addEventListener("click", ()=> {
  moveSlider(1);
});

btnPatriotic.addEventListener("click", ()=> {
  moveSlider(2);
});

function initDots() {
  images.forEach((image, index) => {
    let dot = `<div class="slider-dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"</div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".slider-dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}

function moveSlider(num) {
  imgOut.querySelector(".active").classList.remove("active");
  imgOut.querySelector(".n" + num).classList.add("active");

  sliderDots.querySelector(".active").classList.remove("active");
  sliderDots.querySelector(".n" + num).classList.add("active");

  const btnList = document.querySelector(".btn-list");
  btnList.querySelector(".active").classList.remove("active");
  btnList.querySelector(".n" + num).classList.add("active");

  if(num === 0) {
    city.innerHTML = Admiral.city;
    apart.innerHTML = Admiral.apart;
    time.innerHTML = Admiral.time;
  } else if (num === 1) {
    city.innerHTML = Sochi.city;
    apart.innerHTML = Sochi.apart;
    time.innerHTML = Sochi.time;
  } else if(num === 2) {
    city.innerHTML = Patriotic.city;
    apart.innerHTML = Patriotic.apart;
    time.innerHTML = Patriotic.time;
  }
}




