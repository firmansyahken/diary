import { route } from "../../src/main.js"

export const Navigate = path => {
    history.pushState("", "", path)
    route.handleRoute()
}