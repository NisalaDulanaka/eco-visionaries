// Applies a background fill to the nav bar when is scrolled fromhero section hero section
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("nav-bar");
    const heroSection = document.querySelector(".hero");
    const triggerPoint = heroSection.offsetHeight * 0.2; // 20% of the hero section

    if (window.scrollY > triggerPoint) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
