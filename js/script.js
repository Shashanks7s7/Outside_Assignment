const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const logo = document.querySelector(".logo");
const all = document.querySelector("*");
const header = document.querySelector("header");
const hero = document.getElementById("hero");
const hero__header = document.getElementById("hero__header");
const hero__body = document.getElementById("hero__body");
const hero__img = document.getElementById("hero__ImgDiv");
const tiles = document.getElementById("tiles");
const mission = document.getElementById("mission");
const benefits = document.getElementById("benefits");
const founder = document.getElementById("founder");
const gallery = document.getElementById("gallery");
const footer = document.getElementById("footer");
const navbutn = document.getElementById("navbtn");
const heronav__body = document.getElementById("hero__navbody");
const nav__subtwo = document.getElementById("nav__subtwo");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  logo.classList.toggle("active");
  all.classList.toggle("active");
  header.classList.toggle("active");
  hero.classList.toggle("active");
  hero__body.classList.toggle("active");
  hero__img.classList.toggle("active");
  tiles.classList.toggle("active");
  mission.classList.toggle("active");
  benefits.classList.toggle("active");
  founder.classList.toggle("active");
  footer.classList.toggle("active");
  gallery.classList.toggle("active");
});
navbutn.addEventListener("click", () => {
  if (window.visualViewport.width > 950) {
    hero__body.style.display = "none";
    heronav__body.style.display = "block";
    hero.style.height = "45rem";
    hero__img.style.display = "none";
    tiles.style.marginTop = "2rem";
    hero__header.style.paddingBottom = "0";
    hero__header.style.borderBottom = "1px solid #C4C4C4";
  }
});
