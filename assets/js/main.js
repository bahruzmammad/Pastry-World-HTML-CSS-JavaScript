const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("navigation-links");
const menuButtonIcon = menuButton.querySelector("i");
menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
  const isMenuOpen = navigationLinks.classList.contains("open");
  menuButtonIcon.setAttribute(
    "class",
    isMenuOpen ? "ri-close-line" : "ri-menu-3-line",
  );
});
navigationLinks.addEventListener("click", () => {
  navigationLinks.classList.remove("open");
  menuButtonIcon.setAttribute("class", "ri-menu-3-line");
});
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header-container h1", { ...scrollRevealOptions });
ScrollReveal().reveal(".header-container p", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header-buttons", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".about-content p", {
  ...scrollRevealOptions,
  delay: 1000,
});
