import { Application } from "./application.js";
import { Login } from "./login.js";
import { Home } from "./home.js";

let app = new Application(document, {
    "login" : new Login(),
    "home" : new Home()
});

app.init("login");