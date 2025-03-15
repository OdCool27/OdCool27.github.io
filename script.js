
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".nav-link");
    var currentUrl = window.location.href;

    links.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});


function toggleForm() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm.classList.contains("hidden-div")) {
        contactForm.classList.remove("hidden-div");
        contactForm.classList.add("visible");
    } else {
        contactForm.classList.remove("visible");
        contactForm.classList.add("hidden-div");
    }

    const formInnerDiv = document.getElementById("formInnerDiv");
    if (formInnerDiv.classList.contains("hidden-div")) {
        formInnerDiv.classList.remove("hidden-div");
        formInnerDiv.classList.add("visible");
    } else {
        formInnerDiv.classList.remove("visible");
        formInnerDiv.classList.add("hidden-div");
    }
};



document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add 'fade-in-visible' class with delay for each child
                setTimeout(() => {
                    entry.target.classList.add("fade-in-visible");
                }, index * 400); // 300ms delay per element
                observer.unobserve(entry.target); // Stop observing after fade-in
            }
        });
    }, { threshold: 0.3 }); // Trigger when 20% of the container is visible

    // Observe each child element in the container
    const fadeInElements = document.querySelectorAll(".fade-out");
    fadeInElements.forEach((element) => observer.observe(element));
});
