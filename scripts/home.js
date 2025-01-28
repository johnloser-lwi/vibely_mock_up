import { Page } from './page.js';

export class Home extends Page {
    constructor () {
        super();
        this.page = "../pages/home.html";
    }

    init(app) {
        super.init(app);
    }
}