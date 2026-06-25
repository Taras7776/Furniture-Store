// Mobile menu

const burgerButton = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");

burgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-open");

    burgerButton.classList.toggle("is-open");

    document.body.classList.toggle("no-scroll");
});