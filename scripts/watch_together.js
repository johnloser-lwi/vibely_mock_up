import { Page } from './page.js';

export class WatchTogether extends Page {
    constructor () {
        super();
    }

    onExit() {
        this.app.loadPage('home');
    }

    init(app) {
        super.init(app);

        let exit_btn = this.app.doc.getElementById('exit-btn');
        exit_btn.onclick = this.onExit.bind(this);

    }
}