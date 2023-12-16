'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});
 document.addEventListener('DOMContentLoaded', function() {
      const missionButton = document.querySelector('.tab-btn');
      const missionButton1 = document.querySelector('.tab-btn1');
      const missionContainer = document.querySelector('.mission-container');
      const missionContainer1 = document.querySelector('.mission-container1');

      missionButton.addEventListener('click', function() {
        missionContainer.style.display = 'flex';
      });
      missionButton1.addEventListener('click', function() {
        missionContainer1.style.display = 'flex';
      });
      missionContainer.addEventListener('click', function(event) {
        if (event.target === missionContainer) {
          missionContainer.style.display = 'none';
        }
      });
      missionContainer1.addEventListener('click', function(event) {
        if (event.target === missionContainer1) {
          missionContainer1.style.display = 'none';
        }
      });
    });
    function myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    }

