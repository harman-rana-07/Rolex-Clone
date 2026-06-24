document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('favorites-grid');
    const clearBtn = document.getElementById('clear-all');
    
    function displayFavs() {
        const favs = JSON.parse(localStorage.getItem('rolexFavs')) || [];
        grid.innerHTML = '';

        if (favs.length === 0) {
            grid.innerHTML = '<p>Your list is currently empty.</p>';
            return;
        }

        favs.forEach((watch, index) => {
            const card = document.createElement('div');
            card.className = 'watch-card';
            card.innerHTML = `
                <div class="remove-icon" onclick="removeFav(${index})">
                    <i class="ri-close-line"></i>
                </div>
                <img src="${watch.img}" alt="${watch.name}">
                <div class="card-info">
                    <h3>${watch.name}</h3>
                    <p>${watch.desc}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    window.removeFav = (index) => {
        let favs = JSON.parse(localStorage.getItem('rolexFavs'));
        favs.splice(index, 1);
        localStorage.setItem('rolexFavs', JSON.stringify(favs));
        displayFavs();
    };

    clearBtn.addEventListener('click', () => {
        localStorage.removeItem('rolexFavs');
        displayFavs();
    });

    displayFavs();
});
