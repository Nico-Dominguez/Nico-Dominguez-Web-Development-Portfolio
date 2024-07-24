const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const body = document.body;

function toggleHamburger() {
  navMenu.classList.toggle("show");
  body.classList.toggle("no-scroll");
  hamburgerBtn.setAttribute(
    "aria-expanded",
    hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
}

function closeMenu() {
  navMenu.classList.remove("show");
  body.classList.remove("no-scroll");
  hamburgerBtn.setAttribute("aria-expanded", "false");
}

// Add event listeners to each dropdown button
dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);
    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

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
  if (e.target.classList.contains("nav-link")) {
    closeMenu();
  }
});

// Add this to ensure scrolling is re-enabled when resizing to desktop view
window.addEventListener("resize", () => {
  if (window.innerWidth > 1100) {
    closeMenu();
  }
});
