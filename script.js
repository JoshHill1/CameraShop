let lastScrollTop = 0;
const header = document.querySelector("header");
const topBar = document.querySelector(".top-bar");
const mainHeader = document.querySelector(".main-header");
const subHeader = document.querySelector(".sub-header");
const threshold = 1; // Distance from the top in pixels for top-bar to appear

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    subHeader.classList.add("hidden");
  } else {
    subHeader.classList.remove("hidden");
  }

  if (scrollTop < threshold) {
    topBar.classList.remove("hidden");
    mainHeader.classList.add("down36");
    subHeader.classList.add("down36");
  } else {
    topBar.classList.add("hidden");
    mainHeader.classList.remove("down36");
    subHeader.classList.remove("down36");
  }

  lastScrollTop = scrollTop;
});

// making text of the main header to be the same as the background color when hovered over
document.addEventListener("DOMContentLoaded", (event) => {
  // Get the main header element
  const mainHeader = document.querySelector(".main-header");

  // Get the computed background color of the main header
  const mainHeaderColor = window.getComputedStyle(mainHeader).backgroundColor;
  // Get the filter value applied to the main header
  const mainHeaderFilter = window.getComputedStyle(mainHeader, "::before").filter;

  // Get the list of a tags
  const aTags = document.querySelectorAll(".main-header a");

  // Loop through the list of a tags and add an event listener for mouseover and mouseout
  aTags.forEach((aTag) => {
    aTag.addEventListener("mouseover", (event) => {
      aTag.style.color = mainHeaderColor;
      aTag.style.filter = mainHeaderFilter;
    });
    aTag.addEventListener("mouseout", (event) => {
      aTag.style.color = "var(--accent-color)";
      aTag.style.filter = "none";
    });
  });
});

