document.addEventListener('DOMContentLoaded', function() {
    var currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    var lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = 'Last modified: ' + document.lastModified;
    }

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
