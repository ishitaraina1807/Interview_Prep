// const gallery = document.getElementById("gallery");

// const api = `https://api.artic.edu/api/v1/artworks?page=1&limit=12&fields=id,title,artist_display,image_id`;


// function fetchArtwork ()  {
//     fetch(api)
//     .then(response => response.json())
//     .then(data => {
//         displayArtwork(data.data, data.config.iiif_url)
//     })
//     .catch(error => console.error(error))
// }

// function displayArtwork (artworks, imageUrl) {
//     gallery.innerHTML= ""

//     artworks.forEach(art => {
//         const artCard = document.createElement("div")
//         artCard.classList.add("art-card");
        
//         const img = document.createElement("img");
//         img.src = `${imageUrl}/${art.image_id}/full/200,/0/default.jpg`
//         img.alt = art.title

//         const title = document.createElement("h3");
//         title.textContent = art.title;

//         const artist = document.createElement("p");
//         artist.textContent = art.artist_display;

//         artCard.appendChild(img);
//         artCard.appendChild(title);
//         artCard.appendChild(artist);

//         gallery.appendChild(artCard);
//     })
// }
// fetchArtwork();

const gallery = document.getElementById("gallery");

// API URL
const API_URL = "https://api.artic.edu/api/v1/artworks?page=1&limit=12&fields=id,title,artist_display,image_id";

// Function to fetch and display artworks
async function fetchArtworks() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayArtworks(data.data, data.config.iiif_url);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to display artworks
function displayArtworks(artworks, imageUrlBase) {
    gallery.innerHTML = ""; // Clear previous content

    artworks.forEach(art => {
        const artCard = document.createElement("div");
        artCard.classList.add("art-card");

        const img = document.createElement("img");
        img.src = `${imageUrlBase}/${art.image_id}/full/200,/0/default.jpg`;
        img.alt = art.title;

        const title = document.createElement("h3");
        title.textContent = art.title;

        const artist = document.createElement("p");
        artist.textContent = art.artist_display;

        artCard.appendChild(img);
        artCard.appendChild(title);
        artCard.appendChild(artist);

        gallery.appendChild(artCard);
    });
}

// Call function to fetch and display artworks
fetchArtworks();
