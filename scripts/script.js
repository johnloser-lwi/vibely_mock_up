let app = document.getElementById("app");

document.addEventListener('DOMContentLoaded', () => loadPage('pages/login.html'));

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            app.innerHTML = doc.body.innerHTML;
        })
        .catch(error => {
            console.error('Error fetching login.html:', error);
        });
}

function callToActionHandler() {
    loadPage('pages/home.html');
}