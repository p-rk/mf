import './styles.scss';
import { createBrowserHistory } from 'history';

var routes: any[] = [];

// Configure the routes
routes.push({
    URL: "#/login",
    ComponentName: "pb-login",
    ComponentFramework: "WebComponent"
});
routes.push({
    URL: "#/investments",
    ComponentName: "fixed-deposits",
    ComponentFramework: "WebComponent"
});

const renderComponent = (location: any) => {
    // Hint location.hash will give you the current hash
    var element = document.getElementById("root")
    switch (location.hash) {
        case "#/login":
            element.innerHTML = `<pb-login></pb-login>`
            break;
        case "#/investements":
            element.innerHTML = "<fixed-deposits></fixed-deposits>"

        default:
            break;
    }

    // Remove Web Component (removeChild)

    // Instantiate new Element (createElement)

    // Append new Element (appendChild)
}

const appHistory = createBrowserHistory();

// Trigger the renderComponent method on every route change
appHistory.listen(renderComponent);
if (window.location.hash !== "#/") {
    window.location.hash = "#/";
} else {
    renderComponent(window.location);
}

// Attach an event handler to the Root here for listening to Login_success event
document.getElementById("root").addEventListener("Login_success", () => {
    window.location.hash = "#/investements"
})
