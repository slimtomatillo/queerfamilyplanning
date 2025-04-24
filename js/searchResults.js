document.addEventListener('DOMContentLoaded', function() {
    // Get search term from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('q') || sessionStorage.getItem('globalSearchTerm');
    
    if (!searchTerm) {
        window.location.href = 'index.html';
        return;
    }

    // Display search term
    const searchTermDisplay = document.getElementById('searchTermDisplay');
    searchTermDisplay.textContent = `Search results for: "${searchTerm}"`;

    // Define your searchable content
    const searchableContent = [
        {
            title: 'Adoption',
            description: 'Learn about domestic and international adoption processes for LGBTQIA+ families.',
            url: 'paths/adoption.html'
        },
        {
            title: 'Surrogacy',
            description: 'Explore gestational surrogacy options and considerations for queer families.',
            url: 'paths/surrogacy.html'
        },
        {
            title: 'Assisted Reproduction',
            description: 'Information about IVF, IUI, and other fertility treatments.',
            url: 'paths/assisted-reproduction.html'
        },
        {
            title: 'Legal Resources',
            description: 'Understanding legal rights and protections for LGBTQIA+ families.',
            url: 'legal.html'
        },
        // Add more searchable content as needed
    ];

    // Perform search
    const results = searchableContent.filter(content => {
        const searchString = `${content.title} ${content.description}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });

    // Display results
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'resource-item';
            resultItem.innerHTML = `
                <h4><a href="${result.url}">${result.title}</a></h4>
                <p>${result.description}</p>
            `;
            searchResults.appendChild(resultItem);
        });
        noResults.classList.add('d-none');
    } else {
        noResults.classList.remove('d-none');
    }
}); 