import './style.css';
// import Img from './bg.png';
import { makeHeader , makeHome } from './home';
import { makeMenu } from './menu';
import { makeContacts } from './contact';
firstLoad()

function firstLoad() {
    makeHeader()
    makeHome()
}

function render() {
    const content = document.querySelector('.content');
    content.style = "";
    while (content.children.length > 1) {
        content.children[1].remove();
    }
}

const homeButton = document.querySelector('.Home');
const menuButton = document.querySelector('.Menu');
const contactButton = document.querySelector('.Contact')

homeButton.addEventListener('click', function() {
    render()
    makeHome();
})

menuButton.addEventListener('click', function() {
    render()
    makeMenu()
})

contactButton.addEventListener('click', function() {
    render()
    makeContacts()
})

