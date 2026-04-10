// Handle hamburger open/close
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    });
});

// Position mobile menu AFTER everything loads (fonts, images, etc.)
window.addEventListener("load", () => {
    const announcement = document.querySelector(".announcement-bar");
    const navbar = document.querySelector(".navbar");
    const mobileMenu = document.querySelector(".mobile-menu");

    const totalHeight = announcement.offsetHeight + navbar.offsetHeight;

    const offset = 8; // adjust this number to move menu lower

    mobileMenu.style.top = (totalHeight + offset) + "px";
    mobileMenu.style.height = `calc(100vh - ${totalHeight + offset}px)`;
});

// HERO SLIDESHOW
window.addEventListener("load", () => {
    const slides = document.querySelectorAll(".hero-slideshow .slide");
    let index = 0;

    function showNextSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    slides[0].classList.add("active"); // show first slide

    setInterval(showNextSlide, 3000); // 3 seconds per image
});
