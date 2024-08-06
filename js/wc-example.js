import { wcTemplate } from './wc-template.js';
customElements.define("wc-example", class extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode:'open'});
        
        const template = document.createElement('template');
        template.innerHTML = wcTemplate;
        
        const templateContent = template.content.cloneNode(true);
        shadowRoot.appendChild(templateContent);
        
    }
        
    connectedCallback() {
        console.log("wc starter");
    }
        
});

