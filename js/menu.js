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

    mobileMenu.style.top = totalHeight + "px";
    mobileMenu.style.height = `calc(100vh - ${totalHeight}px)`;
});
