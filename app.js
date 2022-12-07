"use strict";

const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("open");
});
