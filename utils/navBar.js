!(function (d) {
    const navBarTrigger = d.getElementById("mobile-nav-trigger");
    const navBarCloseButton = d.getElementById("navbar-close-btn");

    const mobileNavBar = d.getElementById("mobile-nav");

    navBarTrigger.addEventListener("click", () => {
        mobileNavBar.classList.add("open");
    });

    navBarCloseButton.addEventListener("click", () => {
        mobileNavBar.classList.remove("open");
    })
})(document);
