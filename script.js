"use strict";

// Nav Menu Functionality - No event delegation
/*
const navLinks = Array.from(
  document.body.querySelectorAll("a.navigation__link")
);
const navCheckbox = document.body.querySelector(".navigation__checkbox");

navLinks.forEach(function (link) {
  link.addEventListener("click", () => navCheckbox.click());
});
*/

// Nav Menu Functionality - With event delegation
const navLinks = document.body.querySelector(".navigation__nav");
const navList = document.body.querySelector(".navigation__list");

// console.log(navList);
const navCheckbox = document.body.querySelector(".navigation__checkbox");

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && getComputedStyle(navLinks).opacity === "1") {
    navCheckbox.click();
  }
});

navList.addEventListener("click", function (e) {
  navCheckbox.click();
});

// Sticky NAV

const mediaQuery = window.matchMedia("(max-width: 1000px)");
const sidebar = document.querySelector(".sidebar");
const sidebar2 = document.querySelector(".sidebar--2");
const header = document.querySelector(".header");

const mediaQueryCheck = function () {
  if (mediaQuery.matches) {
    console.log("Media Matched!");

    sidebar2.classList.add("sidebar--top");

    const stickyNav = function (entries) {
      const [entry] = entries;
      console.log(entry);

      if (!entry.isIntersecting && mediaQuery.matches) {
        sidebar.classList.add("sticky");
      } else {
        sidebar.classList.remove("sticky");
      }
    };

    const obsOptions = {
      root: null,
      threshold: 1.0,
    };

    const sidebarObserver = new IntersectionObserver(stickyNav, obsOptions);
    sidebarObserver.observe(header);
  } else {
    sidebar.classList.remove("sticky");
  }
};

mediaQuery.addEventListener("change", mediaQueryCheck);

mediaQueryCheck();
