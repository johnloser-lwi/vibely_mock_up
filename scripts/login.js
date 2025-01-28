import { Page } from './page.js';

export class Login extends Page {
    constructor () {
        super();
        this.page = "../pages/login.html";
    }

    callToActionHandler() {
        this.app.loadPage('home');
    }

    init(app) {
        super.init(app);

        let button = this.app.doc.getElementById('cta-button');
        button.onclick = this.callToActionHandler.bind(this);
    }
}