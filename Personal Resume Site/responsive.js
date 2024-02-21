document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');
    const contactSection = document.getElementById('contact');

    // Function to toggle the contact section
    function toggleContactSection() {
        if (contactSection.style.display === 'none' || contactSection.style.display === '') {
            contactSection.style.display = 'block';
        } else {
            contactSection.style.display = 'none';
        }
    }

    // Add event listener to the contact button
    if (contactButton) { // Check if the button exists
        contactButton.addEventListener('click', toggleContactSection);
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.home-tab-nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href'); // Get the target page URL
            window.location.href = targetPage; // Redirect to the target page
        });
    });

    // Responsive behavior
    window.addEventListener('resize', function() {
        // Add responsive behavior here
        // For example, you can adjust the layout or styling based on window size
    });
});
