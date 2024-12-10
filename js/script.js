// Log a message when the page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio site loaded successfully!");
});

// Highlight the active navigation link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        // Remove active class from all links
        document.querySelectorAll("nav a").forEach(navLink => navLink.classList.remove("active"));
        
        // Add active class to the clicked link
        e.target.classList.add("active");
    });
});



