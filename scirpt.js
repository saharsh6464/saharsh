// Get the lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Add event listeners to each image
document.querySelectorAll(".main-frame a").forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Display the lightbox
        lightbox.style.display = "flex";

        // Set the lightbox image source to the clicked image's source
        lightboxImg.src = this.href;
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener("click", function(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});


// About Me Section Loading Script
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        fetch('aboutme.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('about-me-placeholder').innerHTML = html;
            })
            .catch(error => console.error('Error loading About Me section:', error));
    });
});

// Form Clearing Script
function clearForm() {
    setTimeout(function() {
        document.querySelector('form').reset();
    }, 1000); // Delay to ensure the form data is sent before clearing
}

