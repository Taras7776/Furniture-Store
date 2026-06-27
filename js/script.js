// Mobile menu

const burgerButton = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");

burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("is-open");
    // toggle - метод для перемикання станів, якщо CSS-клас існує на елементі — метод видаляє його; якщо відсутній — додає

    mobileMenu.classList.toggle("is-open");

    document.body.classList.toggle("no-scroll");
});