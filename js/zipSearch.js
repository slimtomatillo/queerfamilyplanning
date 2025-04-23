document.addEventListener('DOMContentLoaded', () => {
    const zipSearchForm = document.getElementById('zipSearchForm');
    const searchResults = document.getElementById('searchResults');

    zipSearchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const zipCode = document.getElementById('zipCode').value;
        
        try {
            // Show loading state
            searchResults.innerHTML = '<div class="loading"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>';
            
            // Fetch local resources based on ZIP code
            const response = await fetchLocalResources(zipCode);
            
            // Display results
            displaySearchResults(response);
        } catch (error) {
            searchResults.innerHTML = '<div class="alert alert-danger" role="alert">Error fetching resources. Please try again later.</div>';
            console.error('Error:', error);
        }
    });

    async function fetchLocalResources(zipCode) {
        // This would be replaced with actual API endpoint
        const apiUrl = `/api/resources/${zipCode}`;
        
        // Simulated API response for demonstration
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    healthcare: [
                        {
                            name: "Inclusive Family Health Center",
                            distance: "2.3 miles",
                            address: "123 Main St",
                            phone: "(555) 555-5555"
                        }
                    ],
                    legalAid: [
                        {
                            name: "LGBTQ+ Legal Services",
                            distance: "3.1 miles",
                            address: "456 Oak Ave",
                            phone: "(555) 555-5556"
                        }
                    ],
                    supportGroups: [
                        {
                            name: "Rainbow Families Support Group",
                            meetingDay: "Every Tuesday",
                            location: "Community Center",
                            contact: "groups@rainbowfamilies.org"
                        }
                    ]
                });
            }, 1000);
        });
    }

    function displaySearchResults(data) {
        const resultsHTML = `
            <div class="results-container">
                <h3 class="h4 mb-4">Healthcare Providers</h3>
                <ul class="resource-list">
                    ${data.healthcare.map(provider => `
                        <li class="resource-item">
                            <h4 class="h5">${provider.name}</h4>
                            <p class="mb-1"><span class="badge bg-primary">${provider.distance}</span></p>
                            <p class="mb-1">${provider.address}</p>
                            <p class="mb-0">${provider.phone}</p>
                        </li>
                    `).join('')}
                </ul>

                <h3 class="h4 mb-4 mt-5">Legal Resources</h3>
                <ul class="resource-list">
                    ${data.legalAid.map(resource => `
                        <li class="resource-item">
                            <h4 class="h5">${resource.name}</h4>
                            <p class="mb-1"><span class="badge bg-primary">${resource.distance}</span></p>
                            <p class="mb-1">${resource.address}</p>
                            <p class="mb-0">${resource.phone}</p>
                        </li>
                    `).join('')}
                </ul>

                <h3 class="h4 mb-4 mt-5">Support Groups</h3>
                <ul class="resource-list">
                    ${data.supportGroups.map(group => `
                        <li class="resource-item">
                            <h4 class="h5">${group.name}</h4>
                            <p class="mb-1">${group.meetingDay}</p>
                            <p class="mb-1">${group.location}</p>
                            <p class="mb-0">${group.contact}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        searchResults.innerHTML = resultsHTML;
    }
}); 