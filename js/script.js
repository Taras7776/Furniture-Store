// Mobile menu

const burgerButton = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");

burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("is-open");
    // toggle - метод для перемикання станів, якщо CSS-клас існує на елементі — метод видаляє його; якщо відсутній — додає

    mobileMenu.classList.toggle("is-open");

    document.body.classList.toggle("no-scroll");
});


// Best-selling products

const products = [ // масив обєктів для товарів
    {
        id: 1,
        productCode: 14,
        name: "Lord armchair",
        brand: "Miedel Home",
        price: 120,
        image: "./images/best-selling_pic1.png",

        description: "Do you want to feel comfortable and hide from the bad weather? This armchair is perfect for relaxing with a book or a cup of tea. It also provides extra back support.",

        dimensions: '28" x 38"',
        material: "Faux suede, wood",

        gallery: [
            "./images/best-selling_pic1.png",
            "./images/best-selling_pic1.png",
            "./images/best-selling_pic1.png",
            "./images/best-selling_pic1.png"
        ]

    },

    {
        id: 2,
        productCode: 15,
        name: "Ultimate Green chair",
        brand: "XODO",
        price: 90,
        image: "./images/best-selling_pic2.png",

        description: "Simple yet functional, this chair is perfect for your minimalistic dining room. It will become a bright spot in your interior design and will awaken your appetite.",

        dimensions: '21" x 32"',
        material: "Plastic",

        gallery: [
            "./images/best-selling_pic2.png",
            "./images/best-selling_pic2.png",
            "./images/best-selling_pic2.png",
            "./images/best-selling_pic2.png"
        ]
    },

    {
        id: 3,
        productCode: 17,
        name: "Valetta armchair",
        brand: "ZIX studio",
        price: 310,
        image: "./images/best-selling_pic3.png",

        description: "An armchair in which you will feel what real comfort is. The original design will suit both the bedroom and the living room, or even a home office. Available only in pink.",

        dimensions: '28" x 35"',
        material: "Faux suede, steel",

        gallery: [
            "./images/best-selling_pic3.png",
            "./images/best-selling_pic3.png",
            "./images/best-selling_pic3.png",
            "./images/best-selling_pic3.png"
        ]

    }
];

const productContent = document.querySelector(".product__content");

if (productContent) {

    const params = new URLSearchParams(window.location.search); // window отримає ?id=2, URLSearchParams дозволяє work з параметрами URL

    const productId = Number(params.get("id")); // отримає "2" а Number переводить в 2 (число)

    const selectedProduct = products.find( // find шукає один товар і дивиться чи підходить по id
        (product) => product.id === productId
    );

    if (selectedProduct) {
        productContent.innerHTML = `
            <div class="product__image">
                <img 
                    src="${selectedProduct.image}"
                    alt="${selectedProduct.name}"
                >
            </div>

            <div class="product__info">
                <p class="product__status">In stock</p>

                <h1 class="product__title">
                    ${selectedProduct.name}, ${selectedProduct.brand}
                </h1>

                <p class="product__code">
                    Product code ${selectedProduct.productCode}
                </p>

                <p class="product__price">
                    ${selectedProduct.price.toFixed(2)} USD
                </p>

                <div class="product__actions">
                    <input
                        class="product__quantity"
                        type="number"
                        min="1"
                        value="1"
                    >

                    <button class="product__button">
                        ADD TO CART
                    </button>
                </div>

                <div class="product__description">
                    <h2 class="product__description-title">
                        Description
                    </h2>

                    <p class="product__description-text">
                        ${selectedProduct.description}
                    </p>
                    
                    <p class="product__details-text">
                        Dimensions and materials:
                    </p>

                    <p class="product__dimensions">
                        ${selectedProduct.dimensions}
                    </p>

                    <p class="product__material">
                        ${selectedProduct.material}
                    </p>
                </div>
            </div>
        `;
    }
}



// Best-selling products rendering

const productsContainer = document.querySelector(".best-selling__content");

if (productsContainer) { // if зчитує якщо цей контейнер існує на цій сторінці — генеруй картки. Якщо немає — нічого
    products.forEach((product) => {
        productsContainer.insertAdjacentHTML(
            "beforeend",
            `
            <article class="best-card">

                <a
                    class="best-card__image-link"
                    href="product.html?id=${product.id}"
                >
                <img
                    class="best-card__image"
                    src="${product.image}"
                    alt="${product.name}"
                >
                </a>

                <a class="best-card__link" href="product.html?id=${product.id}">
                    ${product.name}, ${product.brand}
                </a>

                <p class="best-card__price">
                    ${product.price.toFixed(2)} USD
                </p>

                <button
                    class="best-card__button"
                    data-product-id="${product.id}"
                >
                    ORDER NOW
                </button>
            </article>
            `
        );
    });
}

const faqItems = document.querySelectorAll(".FAQ__item");

faqItems.forEach((item) => {
    const question = item.querySelector(".FAQ__question");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        faqItems.forEach((faqItem) => {
            faqItem.classList.remove("is-open");

            const faqQuestion = faqItem.querySelector(".FAQ__question");
            faqQuestion.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
            item.classList.add("is-open");
            question.setAttribute("aria-expanded", "true");
        }
    });
});