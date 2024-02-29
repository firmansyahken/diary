class Hero extends HTMLElement {
    constructor() {
        super()
        this.name = ""
        this.description = ""
    }
    
    connectedCallback() {
        this.name = this.getAttribute("name")
        this.description = this.getAttribute("description")    
        this.render()        
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <h1>${this.name}</h1>
                <p>${this.description}</p>
            </div>
        `
    }
}

customElements.define("hero-component", Hero)