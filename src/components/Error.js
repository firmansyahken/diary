class Error extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        this.innerHTML = `
            <div>
                <h1>Error Connection..</h1>
            </div>
        `
    }
}

customElements.define("error-component", Error)