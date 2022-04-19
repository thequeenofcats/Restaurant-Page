const content = document.querySelector('.content');


function makeContacts() {

    const makeContacts = (name) => {
        const div = document.createElement('div');
        div.classList.add('person')
        const namePerson = document.createElement('h2');
        namePerson.innerText = name;
        const disc = document.createElement('p');
        disc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, modi sed excepturi perspiciatis placeat pariatur accusantium sunt? Labore molestias nobis illo, dicta reprehenderit odit voluptates, laborum quibusdam neque voluptatum id?';

        div.appendChild(namePerson);
        div.appendChild(disc);
        return div
    }

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    const jackPerson = makeContacts('Jack Jackson');
    const timPerson = makeContacts('Tim Thomas');
    const williamPerson = makeContacts('William Wilson');
    contactDiv.appendChild(jackPerson);
    contactDiv.appendChild(timPerson);
    contactDiv.appendChild(williamPerson);

    content.appendChild(contactDiv)
}

export { makeContacts }