const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".header__menu");
const body = document.body;

function toggleHamburger() {
  navMenu.classList.toggle("show");
  body.classList.toggle("body-no-scroll");
  hamburgerBtn.setAttribute(
    "aria-expanded",
    hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
}

function closeMenu() {
  navMenu.classList.remove("show");
  body.classList.remove("body-no-scroll");
  hamburgerBtn.setAttribute("aria-expanded", "false");
}

// Toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    closeMenu();
  }
});

// Close menu when clicking on a menu item
navMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__menu-link")) {
    closeMenu();
  }
});

// Add this to ensure scrolling is re-enabled when resizing to desktop view
window.addEventListener("resize", () => {
  if (window.innerWidth > 1100) {
    closeMenu();
  }
});
