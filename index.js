
const wrapper = document.querySelector(".wrapper"),
signupHeader = document.querySelector(".signup header"),
loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("onclick", () => {
wrapper.classList.add("active");
});
signupHeader.addEventListener("onclick", () => {
wrapper.classList.remove("active");
});  
alert("Sign-up successful!");

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const searchResults = document.querySelector('#search-results');

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const allProducts = document.querySelectorAll('.col-4');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        searchResults.innerHTML = '';

        allProducts.forEach(product => {
            const productName = product.querySelector('.ps').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                const clonedProduct = product.cloneNode(true);
                searchResults.appendChild(clonedProduct);
            }
        });
    });
});
var art = [];
var currentTotal = 9;
//   addto cart
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = [
        { name: "Red printed T-shirt", price: 500, quantity: 1 },
    ];

    const cartTable = document.getElementById("cartTable");
    const subtotalElement = document.getElementById("subtotal");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("total");

    function updateCart() {
        let subtotal = 0;
        while (cartTable.rows.length > 1) {
            cartTable.deleteRow(1);
        }

        cartItems.forEach(item => {
            const row = cartTable.insertRow(-1);

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.innerHTML = `<div class="classinfo">
                                    <img src="https://redstore-responsive-ecommerce.netlify.app/img/product-1.jpg" width="100px" alt="">
                                    <div>
                                        <p>${item.name}</p>
                                        <small>Price: ${item.price} rupees</small><br>
                                        <a href="#" onclick="removeItem('${item.name}')">Remove</a>
                                    </div>
                                </div>`;
            cell2.innerHTML = `<input type="number" value="${item.quantity}" onchange="updateQuantity('${item.name}', this.value)">`;
            cell3.textContent = `${item.price * item.quantity} rupees`;

            subtotal += item.price * item.quantity;
        });

        const tax = 0.1 * subtotal;
        const total = subtotal + tax;

        subtotalElement.textContent = `${subtotal} rupees`;
        taxElement.textContent = `${tax} rupees`;
        totalElement.textContent = `${total} rupees`;
    }

    function updateQuantity(itemName, newQuantity) {
        const item = cartItems.find(item => item.name === itemName);
        if (item) {
            item.quantity = parseInt(newQuantity);
            updateCart();
        }
    }

    function removeItem(itemName) {
        const itemIndex = cartItems.findIndex(item => item.name === itemName);
        if (itemIndex !== -1) {
            cartItems.splice(itemIndex, 1);
            updateCart();
        }
    }
    updateCart();
});
// slider
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}
function readMore() {
    var moreText = document.getElementById("more");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      document.getElementById('transparent').innerText="Read Less"
    } else {
      moreText.style.display = "none";
      document.getElementById('transparent').innerText="Read More"
    }
  };
  function filterProducts() {
    // Get input value
    var input = document.getElementById('searchInput').value.toLowerCase();

    // Get all product cards
    var productCards = document.querySelectorAll('.product-card');

    // Loop through each product card
    productCards.forEach(function(card) {
        // Get product title from each card
        var title = card.querySelector('.product-title').innerText.toLowerCase();

        // Show or hide the card based on the search input
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}