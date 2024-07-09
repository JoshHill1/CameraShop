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
