import "../components/Navbar.js"
import "../components/Hero.js"
import { ScrollToTop } from "../utils/ScrollToTop.js"

export default class Contact {
    constructor() {
        ScrollToTop()
    }
    
    render() {
        return `
            <navbar-component active="Contact"></navbar-component>
            <div class="wrapper">
                <hero-component
                    name="Contact Me"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quis animi nam harum architecto unde impedit veniam maxime odit sequi."
                ></hero-component>
                <div class="contact">
                    <p>Pamekasan, Madura, Jawa Timur, Indonesia</p>
                    <p>firmansyahken4@gmail.com</p>
                    <ul>
                        <li><i class="fa fa-instagram"></i></li>
                        <li><i class="fa fa-github"></i></li>
                        <li><i class="fa fa-linkedin"></i></li>
                    </ul>
                </div>
            </div>
        `
    }
}