class Navbar extends HTMLElement {
    constructor() {
        super()
        this.active = ""
        this.navs = [
            {
                name: "Home",
                path: "https://firmansyahken.github.io/diary"
            },
            {
                name: "Blog",
                path: "#blog"
            },
            {
                name: "Contact",
                path: "#contact"
            }
        ]
    }
    
    connectedCallback() {
        this.active = this.getAttribute("active")
        this.render()
    }

    handleNav() {
        document.querySelector(".menu").classList.toggle("active")
        if(this.classList.contains("active")) {
            return this.classList.remove("active")
        } 
        this.classList.add("active")
    }

    render() {
        this.innerHTML = `
            <nav>
                <div class="navbar-container">
                    <h1>Wahyudi</h1>
                    <ul>
                        ${this.navs.map(nav => (
                            `<li>
                                <a 
                                class="${this.active == nav.name && 'active'}"
                                data-link="${nav.path}">${nav.name}</a>
                            </li>`
                        )).join("")}
                    </ul>
                </div>
            </nav>

            <nav class="navbar-mobile">
                <h1>Wahyudi</h1>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            <div class="menu">
                <ul>
                    ${this.navs.map(nav => (
                        `<li><a 
                                class="${this.active == nav.name && 'active'}"
                                data-link="${nav.path}">${nav.name}
                            </a>
                        </li>`
                    )).join("")}
                </ul>
            </div>
        `
        
        this.querySelector(".hamburger").addEventListener("click", this.handleNav)
    }

}

customElements.define("navbar-component", Navbar)