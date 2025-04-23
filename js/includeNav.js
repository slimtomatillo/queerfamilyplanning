document.addEventListener('DOMContentLoaded', function() {
    // Insert the navigation
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            
            // Set active state based on current page
            const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
            const navLink = document.querySelector(`[data-page="${currentPage}"]`);
            if (navLink) {
                navLink.classList.add('active');
                navLink.setAttribute('aria-current', 'page');
            }
        });
}); 