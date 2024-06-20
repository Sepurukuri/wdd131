document.addEventListener('DOMContentLoaded', function() {
    // Populate the current year
    var currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Populate the last modified date
    var lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = 'Last modified: ' + document.lastModified;
    }
    
    // Hamburger menu functionality
    const hamburgerButton = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        if (navMenu.classList.contains("show")) {
            hamburgerButton.innerHTML = 'X';
        } else {
            hamburgerButton.innerHTML = '&#9776;';
        }
    });
});
