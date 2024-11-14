// Placeholder script to confirm JS is working
console.log("JavaScript loaded!");

// Example of interactivity: add hover effects, animations, or a pop-up modal for image previews here.
// Lightbox Functionality
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Open lightbox on image click
    document.querySelectorAll(".gallery-item img").forEach(image => {
        image.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = image.src;
        });
    });

    // Close lightbox on 'X' button click
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Close lightbox on click outside of image
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
