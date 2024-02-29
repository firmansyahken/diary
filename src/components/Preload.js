class Preload extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="preloader active">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        `
    }

}

customElements.define("preload-component", Preload)