class Social extends HTMLElement {
    constructor() {
        super()
        this.share = `https://api.whatsapp.com/send?text=${window.location.href}`
        this.render()
    }

    render() {
        this.innerHTML = `
            <ul class="socials">
                <li><i class="fa fa-instagram"></i></li>
                <li><i class="fa fa-github"></i></li>
                <li><i class="fa fa-linkedin"></i></li>
                <li>
                    <a href="${this.share}"><i class="fa fa-share"></i></a>
                </li>
            </ul>
        `
    }
}

customElements.define("social-component", Social)