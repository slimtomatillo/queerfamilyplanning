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

            // Initialize search functionality after nav is loaded
            const searchInput = document.getElementById('globalSearch');
            const searchButton = document.getElementById('searchButton');
            const mobileSearchInput = document.getElementById('globalSearchMobile');
            const mobileSearchButton = document.getElementById('searchButtonMobile');

            function performGlobalSearch(searchTerm) {
                console.log('Performing search for:', searchTerm);
                if (!searchTerm) return;
                
                // Store the search term in sessionStorage
                sessionStorage.setItem('globalSearchTerm', searchTerm);

                // Redirect to search results page
                window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
            }

            function setupSearch(input, button) {
                if (!input || !button) {
                    console.log('Missing input or button:', { input, button });
                    return;
                }

                // Search on button click
                button.addEventListener('click', () => {
                    console.log('Search button clicked');
                    const searchTerm = input.value.trim();
                    if (searchTerm) {
                        performGlobalSearch(searchTerm.toLowerCase());
                    }
                });

                // Search on Enter key
                input.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        console.log('Enter key pressed');
                        event.preventDefault();
                        const searchTerm = this.value.trim();
                        if (searchTerm) {
                            performGlobalSearch(searchTerm.toLowerCase());
                        }
                    }
                });
            }

            // Setup both desktop and mobile search
            if (searchInput && searchButton) {
                console.log('Setting up desktop search');
                setupSearch(searchInput, searchButton);
            }
            if (mobileSearchInput && mobileSearchButton) {
                console.log('Setting up mobile search');
                setupSearch(mobileSearchInput, mobileSearchButton);
            }
        })
        .catch(error => console.error('Error loading navigation:', error));
}); 