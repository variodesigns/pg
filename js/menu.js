// Handle hamburger open/close
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    });
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

    setInterval(showNextSlide, 2000); // 2 seconds per image
});
