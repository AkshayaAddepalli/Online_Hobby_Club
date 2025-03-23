document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const form = document.querySelector("form");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            // Reset all stars
            stars.forEach(s => s.classList.remove("active"));

            // Highlight selected stars
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents actual form submission
        
        // Show the popup
        popup.style.display = "flex";

        // Clear form inputs after submission
        form.reset();
        stars.forEach(s => s.classList.remove("active"));
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
