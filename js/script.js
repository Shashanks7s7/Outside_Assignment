const hamburger=document.querySelector(".hamburger");
const navLinks=document.querySelector(".nav__links");
const logo=document.querySelector(".logo");
const all=document.querySelector("*");
const header=document.querySelector("header");
const hero=document.getElementById("hero")
const hero__body=document.getElementById("hero__body")
console.log(hero__body);
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    logo.classList.toggle("active");
    all.classList.toggle("active");
    header.classList.toggle("active");
    hero.classList.toggle("active");
    hero__body.classList.toggle("active");

    console.log("hehe");
})