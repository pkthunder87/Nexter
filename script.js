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

// console.log(getComputedStyle(navLinks).opacity);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && getComputedStyle(navLinks).opacity === "1") {
    navCheckbox.click();
    // console.log("Escape Key Pressed!");
  }
});

navList.addEventListener("click", function (e) {
  // console.log(e.target);
  navCheckbox.click();

  // if (e.target.classList.contains("navigation__link")) {
  //   navCheckbox.click();
  // }
});

// Sticky NAV

// const sidebar = document.querySelector(".sidebar");

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) {
//     sidebar.classList.add("sticky");
//   } else {
//     sidebar.classList.remove("sticky");
//   }
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const sidebarObserver = new IntersectionObserver(stickyNav);
// sidebarObserver.observe(sidebar);
