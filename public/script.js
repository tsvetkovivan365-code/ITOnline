document.addEventListener('DOMContentLoaded', () => {
    const searchHistory = document.getElementById('search-history');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resetButton = document.getElementById('reset-button');

    // Reset search history
    function resetHistory() {
        searchHistory.innerText = '';
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Select a previous search';
        searchHistory.appendChild(option);
    }
    //Load search history from local storage
    function loadSearchHistory() {
        let savedSearches = JSON.parse(localStorage.getItem('searchHistory')) || [];
        resetHistory();
        savedSearches.forEach(searchTerm => {
            const option = document.createElement('option');
            option.value = searchTerm;
            option.textContent = searchTerm;
            searchHistory.appendChild(option);
        });
    }
    // Save search history to local storage
    function saveSearchHistory(searchTerm) {
        let savedSearches = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!savedSearches.includes(searchTerm)) {
            savedSearches.push(searchTerm);
            localStorage.setItem('searchHistory', JSON.stringify(savedSearches));
            }
        }
    
    // Event listener for dropdown change
    searchHistory.addEventListener('change', () => {
        const selectedSearch = searchHistory.value;
        if (selectedSearch) {
            searchInput.value = selectedSearch;
            searchPodcast();
        }
    });

    //Event listener for serach button, input
    searchButton.addEventListener('click', searchPodcast);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchPodcast();
        }
    })

    // Event listener to reset search input
    searchInput.addEventListener('focus', () => {
        searchInput.value = '';
    })

    //Event listener for rest button
    resetButton.addEventListener('click', () => {
        localStorage.removeItem('searchHistory');
        resetHistory();
        searchInput.value = '';
    })

    //Load search history when page loads
    loadSearchHistory();


    // Search Podcasts
    function searchPodcast() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searched:', searchTerm);
            saveSearchHistory(searchTerm);
            loadSearchHistory();
        }
    }

    // Navigation
    const searchLink = document.getElementById('search-link');
    const listenLink = document.getElementById('listen-link');
    const searchContainer = document.querySelector('.search-container');
    const mainContainer = document.querySelector('.main-container');
    const playerContainer = document.querySelector('.player-container');
    const queueContainer = document.querySelector('.queue');

    searchLink.addEventListener('click', navigateToSearch);
    listenLink.addEventListener('click', navigateToPlayer);
    function navigateToSearch() {
        searchContainer.style.display = 'flex';
        mainContainer.style.display = 'flex';
        playerContainer.style.display = 'none';
        queueContainer.style.display = 'none';
        searchLink.classList.add('selected');
        listenLink.classList.remove('selected');
    }

    function navigateToPlayer() {
        searchContainer.style.display = 'none';
        mainContainer.style.display = 'none';
        playerContainer.style.display = 'flex';
        queueContainer.style.display = 'flex';
        searchLink.classList.remove('selected');
        listenLink.classList.add('selected');
    }
});