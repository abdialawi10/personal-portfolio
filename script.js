// Update the copyright year automatically
function updateYear() {
    var yearElement = document.getElementById('current-year');
    var currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Make navigation links scroll smoothly
function smoothScroll() {
    var navLinks = document.querySelectorAll('nav a');
    
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            var navHeight = document.querySelector('nav').offsetHeight;
            var targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
}

// Run all functions when the page loads
window.onload = function() {
    updateYear();
    smoothScroll();
};