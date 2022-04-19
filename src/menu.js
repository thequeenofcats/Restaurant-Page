import beerImg from './beer.png';
import eggsImg from './eggs.png';
const content = document.querySelector('.content');


function makeMenu() {

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const foodDishDiv = document.createElement('div');
    foodDishDiv.classList.add('dish');
    foodDishDiv.classList.add('dish-second');
    const beerDishDiv = document.createElement('div');
    beerDishDiv.classList.add('dish');

    const foodDishTextDiv = document.createElement('div')
    foodDishTextDiv.classList.add('dish-text');
    foodDishTextDiv.innerHTML = ` <h2>Dishes</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorem alias ex quod magni, obcaecati voluptatibus delectus modi. Iusto nam atque modi quisquam reiciendis facere alias aspernatur impedit earum repellat?</p>`;
    const beerDishTextDiv = document.createElement('div');
    beerDishTextDiv.classList.add('dish-text');
    beerDishTextDiv.innerHTML = ` <h2>Beer</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorem alias ex quod magni, obcaecati voluptatibus delectus modi. Iusto nam atque modi quisquam reiciendis facere alias aspernatur impedit earum repellat?</p>`;

    const drinksImg = new Image();
    drinksImg.src = beerImg;
    const dishImg = new Image();
    dishImg.src = eggsImg;
   
   
    

   
    beerDishDiv.appendChild(beerDishTextDiv);
    beerDishDiv.appendChild(drinksImg);

    foodDishDiv.appendChild(dishImg);
    foodDishDiv.appendChild(foodDishTextDiv);  

    menuDiv.appendChild(beerDishDiv);
    menuDiv.appendChild(foodDishDiv);

    content.appendChild(menuDiv);


}


export {  makeMenu }