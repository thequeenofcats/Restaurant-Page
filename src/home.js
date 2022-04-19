import Img from './bg.png';

const content = document.querySelector('.content');

function makeHeader() {

    const createLink = (title) => {
        const link = document.createElement('li')
        link.innerText = title;
        link.classList.add(`${title}`);
        nav.appendChild(link)
        return link
    }

    const header = document.createElement('header');
    const namePub = document.createElement('span');
    const nav = document.createElement('ul');
    const homeLink = createLink('Home');
    const menuLink = createLink('Menu');
    const contactLink = createLink('Contact');
    namePub.innerText = 'The Nightowl';
    header.appendChild(namePub);
    header.appendChild(nav);
    content.appendChild(header);
}

function makeHome() {

    const createElement = (type) => {
        const element = document.createElement(`${type}`)
        textDiv.appendChild(element)
        return element
    }
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('main');
    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    const h1 = createElement('h1')
    const h3 = createElement('h3')
    const button = createElement('button')
    contentDiv.appendChild(textDiv);
    h1.innerText = `Taste all of Britain in one place!`;
    h3.innerText = `We guarantee that you'll have a great time!`;
    button.innerText = `Look at what we offer`;
    button.classList.add('menu-button');

    const img = new Image();
    img.src = Img;
    img.classList.add('bg');
    contentDiv.appendChild(img);
    content.appendChild(contentDiv);
}



export { makeHeader, makeHome }