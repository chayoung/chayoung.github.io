document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("main-nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("is-open");
    });
  }
});
