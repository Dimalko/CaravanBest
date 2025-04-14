let currentImageIndex = 0;
let productImages = [];


const products = {
    "eifelland": {
        name: "Eifelland Holiday 50",
        images: [
            "/assets/images/products/eifelland/eifelland-1.JPG",
            "/assets/images/products/eifelland/eifelland-2.JPG",
            "/assets/images/products/eifelland/eifelland-3.JPG",
            "/assets/images/products/eifelland/eifelland-4.JPG",
            "/assets/images/products/eifelland/eifelland-5.JPG",
            "/assets/images/products/eifelland/eifelland-6.JPG",
            "/assets/images/products/eifelland/eifelland-7.JPG",
            "/assets/images/products/eifelland/eifelland-8.JPG",
            "/assets/images/products/eifelland/eifelland-9.JPG",
            "/assets/images/products/eifelland/eifelland-10.JPG",
        ],
        brand: "Eifelland",
        model: "Holiday 50",
        condition: "Μεταχειρισμένο",
        year: "2003",
        weight: "1.300",
        length: "5.4 μέτρα",
        width: "2.5 μέτρα",
        price: "8.500 €"
    },
    "caravelair": {
        name: "Caravelair 426",
        images: [
            "/assets/images/products/caravelair/caravelair-1.JPG",
            "/assets/images/products/caravelair/caravelair-2.JPG",
            "/assets/images/products/caravelair/caravelair-3.JPG",
            "/assets/images/products/caravelair/caravelair-4.JPG",
            "/assets/images/products/caravelair/caravelair-5.JPG",
            "/assets/images/products/caravelair/caravelair-6.JPG",
            "/assets/images/products/caravelair/caravelair-7.JPG",
            "/assets/images/products/caravelair/caravelair-8.JPG"
        ],
        brand: "Caravelair",
        model: "426",
        condition: "Μεταχειρισμένο",
        year: "2000",
        weight: "1.100",
        length: "4.3 μέτρα",
        width: "2.3 μέτρα",
        price: "6.500 €"
    },
    "eriba": {
        name: "Eriba Nova 490",
        images: [
            "/assets/images/products/eriba/eriba-1.JPG",
            "/assets/images/products/eriba/eriba-2.JPG",
            "/assets/images/products/eriba/eriba-3.JPG",
            "/assets/images/products/eriba/eriba-4.JPG",
            "/assets/images/products/eriba/eriba-5.JPG",
            "/assets/images/products/eriba/eriba-6.JPG",
            "/assets/images/products/eriba/eriba-7.JPG"
        ],
        brand: "Eriba Nova",
        model: "490",
        condition: "Μεταχειρισμένο",
        year: "1987",
        weight: "1.350",
        length: "5.0 μέτρα",
        width: "2.2 μέτρα",
        price: "3.500 €"
    },
    "lmc": {
        name: "LMC 450",
        images: [
            "/assets/images/products/lmc/lmc-1.JPG",
            "/assets/images/products/lmc/lmc-2.JPG",
            "/assets/images/products/lmc/lmc-3.JPG",
            "/assets/images/products/lmc/lmc-4.JPG",
            "/assets/images/products/lmc/lmc-5.JPG",
            "/assets/images/products/lmc/lmc-6.JPG",
            "/assets/images/products/lmc/lmc-7.JPG",
            "/assets/images/products/lmc/lmc-8.JPG",
            "/assets/images/products/lmc/lmc-9.JPG"
        ],
        brand: "LMC",
        model: "450",
        condition: "Μεταχειρισμένο",
        year: "1991",
        weight: "1.200",
        length: "4.5",
        width: "2.3",
        price: "3.500 €"
    },
    "hobby": {
        name: "Hobby 550 TKM",
        images: [
            "/assets/images/products/hobby/hobby-1.jpg",
            "/assets/images/products/hobby/hobby-2.jpg",
            "/assets/images/products/hobby/hobby-3.jpg",
            "/assets/images/products/hobby/hobby-4.jpg",
            "/assets/images/products/hobby/hobby-5.jpg",
            "/assets/images/products/hobby/hobby-6.jpg",
            "/assets/images/products/hobby/hobby-7.jpg",
            "/assets/images/products/hobby/hobby-8.jpg",
            "/assets/images/products/hobby/hobby-9.jpg",
            "/assets/images/products/hobby/hobby-10.jpg",
            "/assets/images/products/hobby/hobby-11.jpg",
            "/assets/images/products/hobby/hobby-12.jpg"
        ],
        brand: "Hobby",
        model: "550 TKM",
        condition: "Μεταχειρισμένο",
        year: "1994",
        weight: "1.500",
        length: "6.2",
        width: "2.5",
        price: "6.500 €"
    }
};


function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data
        })
        .then(() => {
            if (file.includes("header.html")) {
                addMenuFunctionality();
            }
        });
}

function addMenuFunctionality() {
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenu = document.querySelector(".close-menu");
    const overlay = document.querySelector(".bg-overlay");
    const navLinks = document.querySelector("#nav-links");

    const isActive = navLinks.classList.contains("active");

    if (menuToggle && navLinks && closeMenu && overlay) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            overlay.classList.add("active"); 
        });

        closeMenu.addEventListener("click", function () {
            navLinks.classList.remove("active"); // Close menu
            overlay.classList.remove("active");
        });

        overlay.addEventListener("click", function () {
            navLinks.classList.remove("active");
            overlay.style.display = "none"; // Hide overlay
        });
    }
}

// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Load product details
function loadProductDetails() {
    const productName = getQueryParam("name");

    if (!productName || !products[productName]) {
        document.body.innerHTML = "<h2>Product not found</h2>";
        return;
    }

    const product = products[productName];

    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-model").textContent = product.model;
    document.getElementById("product-condition").textContent = product.condition;
    document.getElementById("product-year").textContent = product.year;
    document.getElementById("product-weight").textContent = product.weight;
    document.getElementById("product-length").textContent = product.length;
    document.getElementById("product-width").textContent = product.width;

    // Set main image
    document.getElementById("main-image").src = product.images[0];

    // Generate thumbnails
    const thumbnailsContainer = document.querySelector(".swiper-wrapper");
    thumbnailsContainer.innerHTML = "";// Clear existing thumbnail
    
    product.images.forEach((imgSrc, index) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.classList.add("thumbnail");
        imgElement.onclick = () => {
            document.getElementById("main-image").src = imgSrc;
        };
        
        slide.appendChild(imgElement)
        thumbnailsContainer.appendChild(slide);
    });

    // Initialize Swiper.js
    new Swiper(".swiper", {
        slidesPerView: 3, // Show 3 thumbnails at a time
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
        }
    });
}

// Open the modal and set the image
function openModal() {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const mainImage = document.getElementById("main-image");

    // Prevent errors if elements are missing
    if (!modal || !modalImg || !mainImage) return; 
    // Ensure modal only opens when an image is clicked
    if (!event || event.type !== "click") return;

    productImages = Array.from(document.querySelectorAll(".swiper-slide img")).map(img => img.src);

    currentImageIndex = productImages.indexOf(mainImage.src)

    modal.style.display = "flex"; // Show the modal
    modalImg.src = mainImage.src; // Set the modal image to the main image
}

// Close the modal
function closeModal() {
    document.getElementById("image-modal").style.display = "none";
}

// Change image with arrows
function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = productImages.length - 1; // Loop back to last image
    } else if (currentImageIndex >= productImages.length) {
        currentImageIndex = 0; // Loop to first image
    }

    document.getElementById("modal-img").src = productImages[currentImageIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "/pages/header.html");
    loadComponent("footer", "/pages/footer.html");
    
    if (window.location.pathname.includes("product")) {
        loadProductDetails();
    }
});

// Load the header, footer, and product details when the page loads
loadComponent("header", "/pages/header.html");
loadComponent("footer", "/pages/footer.html");

if (window.location.pathname.includes("product")) {
    loadProductDetails();
}