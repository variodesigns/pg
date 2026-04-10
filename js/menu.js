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


// ===============================
// FULLSCREEN MENU IMAGE VIEWER
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const viewer = document.getElementById("menu-viewer");
    const viewerImg = document.getElementById("menu-viewer-img");
    const closeBtn = document.querySelector(".menu-viewer-close");

    // Buttons in the menu section
    const mainMenuBtn = document.querySelector('.menu-btn[href="menu.html"]');
    const drinksMenuBtn = document.querySelector('.menu-btn[href="drinks.html"]');

    if (mainMenuBtn) {
        mainMenuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            viewerImg.src = "images/mainmenu.jpg";
            viewer.classList.add("active");
        });
    }

    if (drinksMenuBtn) {
        drinksMenuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            viewerImg.src = "images/drinkmenu.jpg";
            viewer.classList.add("active");
        });
    }

    // Close viewer
    closeBtn.addEventListener("click", () => {
        viewer.classList.remove("active");
    });

    // Close when clicking outside the image
    viewer.addEventListener("click", (e) => {
        if (e.target === viewer) {
            viewer.classList.remove("active");
        }
    });
});
