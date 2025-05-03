document.addEventListener("DOMContentLoaded", function () {
    const commentBox = document.getElementById("comment");
    const counter = document.getElementById("charCounter");

    commentBox.addEventListener("input", function () {
        counter.textContent = (500 - commentBox.value.length) + " characters remaining";
    });

    document.querySelector("form").addEventListener("submit", function (event) {
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        if (!fullName || !email || !phone) {
            alert("Please fill out all required fields!");
            event.preventDefault();
        }
    });

    const ratingStars = document.querySelectorAll(".rating span");
    ratingStars.forEach(star => {
        star.addEventListener("click", function () {
            alert("You rated: " + this.textContent);
        });
    });
});
