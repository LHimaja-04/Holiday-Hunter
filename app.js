
const destinations = [
    {
        title: "Discover the Wonders of Bali",
        description: "Bali offers beautiful beaches, a vibrant culture, and breathtaking landscapes.",
        link: "https://example.com/bali"
    },
    {
        title: "Experience the Magic of Paris",
        description: "The City of Light is known for its art, history, and stunning architecture.",
        link: "https://example.com/paris"
    },
    {
        title: "Explore the Wild Beauty of the Serengeti",
        description: "Home to the great migration, the Serengeti is a must-see for nature enthusiasts.",
        link: "https://example.com/serengeti"
    },
    {
        title: "Relax in the Maldives",
        description: "Enjoy pristine beaches, crystal clear waters, and luxurious resorts in the Maldives.",
        link: "https://example.com/maldives"
    },
    {
        title: "Adventure Awaits in New Zealand",
        description: "New Zealand offers a mix of stunning landscapes, from mountains to beaches.",
        link: "https://example.com/newzealand"
    },
];

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("input[type='search']");
    const destinationCards = document.querySelectorAll("article");

    searchInput.addEventListener("input", function() {
        const searchValue = searchInput.value.toLowerCase();

        destinationCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(searchValue)) {
                card.style.display = ""; 
            } else {
                card.style.display = "none"; 
            }
        });
    });
});

function displayDestinations() {
    const destinationsList = document.getElementById('destinationsList');
    destinationsList.innerHTML = '';

    destinations.forEach((destination, index) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${destination.title}</h3>
            <p>${destination.description}</p>
            <a href="#" onclick="openModal(${index})">Read more</a>
        `;
        destinationsList.appendChild(article);
    });
}

function openModal(index) {
    const destination = destinations[index];
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLink = document.getElementById('modalLink');

    if (modalTitle && modalDescription && modalLink) {
        modalTitle.innerText = destination.title;
        modalDescription.innerText = destination.description;
        modalLink.href = destination.link;
    }

    const modal = document.getElementById('tourismModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('tourismModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('tourismModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.addEventListener('DOMContentLoaded', displayDestinations);