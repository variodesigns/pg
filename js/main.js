document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    const title = document.querySelector(".title");

    // Fade in logo first
    setTimeout(() => {
        logo.classList.add("fade-in");
    }, 200);

    // Fade in title after logo
    setTimeout(() => {
        title.classList.add("fade-in");
    }, 900);

    // After everything is fully visible, wait 1 second, then fade out
    setTimeout(() => {
        document.body.classList.add("fade-out");
    }, 2200); // 900ms fade-in + 1s hold + buffer

    // Redirect after fade-out completes
    setTimeout(() => {
        window.location.href = "homepage.html";
    }, 3200); // 1s fade-out duration
});

