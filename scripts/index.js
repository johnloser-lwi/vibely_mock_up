import { Application } from "./application.js";
import { Login } from "./login.js";
import { Home } from "./home.js";
import { ActivityBrowser } from "./activity_browser.js";
import { WatchTogether } from "./watch_together.js";

let app = new Application(document, {
    "login" : new Login(),
    "home" : new Home(),
    "browser" : new ActivityBrowser(),
    "watch_together" : new WatchTogether()
});

app.init("login");