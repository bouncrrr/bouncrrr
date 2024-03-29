// Function to handle navbar visibility
function handleNavbar(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById("navbar").classList.remove("navbar-visible");
        } else {
            document.getElementById("navbar").classList.add("navbar-visible");
        }
    });
}

// Create an Intersection Observer instance with a custom threshold
const observer = new IntersectionObserver(handleNavbar, { threshold: 0.3 });

// Observe the header element
observer.observe(document.querySelector('header'));





function handleArrowVisibility(entries) {
    entries.forEach(entry => {
        const arrowContainer = document.getElementById("arrow-container");
        const arrow = document.getElementById("arrow");
        if (!entry.isIntersecting) {
            // When the header is not visible, fade out both the arrow and its container
            arrowContainer.classList.add("arrow-hidden");
            arrow.classList.add("arrow-hidden");
        } else {
            // When the header becomes visible, fade in both the arrow and its container
            arrowContainer.classList.remove("arrow-hidden");
            arrow.classList.remove("arrow-hidden");
        }
    });
}

const arrowObserver = new IntersectionObserver(handleArrowVisibility, {
    threshold: [1, 1] // Trigger at both just out of and into view
});


// Assuming you want to hide the arrow when the header is out of view:
arrowObserver.observe(document.querySelector('header'));
