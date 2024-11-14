document.addEventListener('DOMContentLoaded', function () {
    // Initialize Glide.js for the gallery carousel
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        gap: 10
    }).mount();

    // Initialize AOS for animations on scroll
    AOS.init();

    // Initialize Algolia Places
    const placesAutocomplete = locations({
        appId: 'YourAlgoliaAppID',
        apiKey: 'YourAlgoliaAPIKey',
        container: document.querySelector('#address-input')
    });
});
