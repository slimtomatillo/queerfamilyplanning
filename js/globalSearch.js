document.addEventListener('DOMContentLoaded', function() {
    console.log('GlobalSearch.js loaded');
    
    const searchInput = document.getElementById('globalSearch');
    const searchButton = document.getElementById('searchButton');
    const mobileSearchInput = document.getElementById('globalSearchMobile');
    const mobileSearchButton = document.getElementById('searchButtonMobile');

    console.log('Search elements found:', {
        searchInput: searchInput,
        searchButton: searchButton,
        mobileSearchInput: mobileSearchInput,
        mobileSearchButton: mobileSearchButton
    });

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

        // Prevent form submission
        const form = input.closest('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                console.log('Form submission prevented');
                e.preventDefault();
                return false;
            });
        }
    }

    // Setup both desktop and mobile search if elements exist
    if (searchInput && searchButton) {
        console.log('Setting up desktop search');
        setupSearch(searchInput, searchButton);
    }
    if (mobileSearchInput && mobileSearchButton) {
        console.log('Setting up mobile search');
        setupSearch(mobileSearchInput, mobileSearchButton);
    }
}); 