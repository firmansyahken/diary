import { Navigate } from "../../app/Router/Navigate.js"
import { dateFormat } from "../utils/DateFormat.js"

class Card extends HTMLElement {
    constructor(){
        super()
        this.uid = 0
        this.img = ""
        this.name = ""
        this.time = ""
        this.handleClick = this.handleClick.bind(this)
    }
    
    connectedCallback() {
        this.uid = this.getAttribute("uid")
        this.img = this.getAttribute("img")
        this.name = this.getAttribute("name")
        this.time = this.getAttribute("time")
        this.render()
    }

    handleClick() {
        let path = "#detail/"+this.uid
        Navigate(path)
    }

    render() {
        this.innerHTML = `
            <div class="card">
                <img src="${this.img}" alt="thumbnail"/>
                <div>
                    <p>${dateFormat(this.time)}</p>
                    <p>${this.name}</p>
                </div>
            </div>
        `
        this.querySelector(".card").addEventListener("click", this.handleClick)
    }
} 

customElements.define("card-component", Card)