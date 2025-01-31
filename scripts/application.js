export class Application {
    constructor(doc, pages) {
        this.doc = doc;
        this.pages = pages;
    }

    init(init_page_index) {
        this.doc.addEventListener('DOMContentLoaded', () => 
            {
                this.container = this.doc.getElementById("app");
                this.loadPage(init_page_index);
            });
    }

    loadPage(page) {
        if (!this.pages.hasOwnProperty(page)) {
            console.error(`Page ${page} does not exist in the pages map.`);
            return;
        }

        let new_page = this.pages[page];
        fetch(`../pages/${page}.html`)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                this.container.innerHTML = doc.body.innerHTML;

                new_page.init(this);
            })
            .catch(error => {
                console.error('Error fetching login.html:', error);
            });
    }
}