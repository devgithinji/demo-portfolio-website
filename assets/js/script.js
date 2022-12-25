'use strict'

//add eventListener on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback)
    }
}


//preloader
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", function () {
    preloader.classList.add("loaded")
    document.body.classList.add("loaded")
})

//mobile nav toggle
const navbar = document.querySelector("[data-navbar]")
const navbarLinks = document.querySelectorAll("[data-nav-link]")
const navToggler = document.querySelector("[data-nav-toggler]")

const toggleNavBar = function () {
    navbar.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNavBar)

const closeNavBar = function () {
    navbar.classList.remove("active")
}

addEventOnElements(navbarLinks, closeNavBar)

//active header when window scrolled to 50px
const header = document.querySelector("[data-header]")
const activeHeader = function () {
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}
window.addEventListener("scroll", activeHeader)
