import "./screens/mainDashboard"
import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
        const mainDashboard = this.ownerDocument.createElement('app-mainDashboard');
        this.shadowRoot?.appendChild(mainDashboard);}
    }
}

customElements.define('app-container', AppContainer)