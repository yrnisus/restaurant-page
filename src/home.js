import Logo from './images/logo-transparent.png';
import toggleBG from './bg-toggle.js';

export default function pageLoad() {
    return createMain();
}

function createMain() {
    toggleBG('home');
    //create  main div
    const main = document.createElement('div');
    main.classList.add('main');

    //create title-wrapper div
    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('title-wrapper');

    //title column
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    titleContainer.innerHTML = "<div class='title'>Wasa Bae</div><div class='title-location'>West Palm, FL</div>";
    const orderBtn = document.createElement('button');
    orderBtn.setAttribute('id', 'order-btn');
    orderBtn.innerHTML = "Order now";
    titleContainer.appendChild(orderBtn);
    titleWrapper.appendChild(titleContainer);


    //add sushi logo to right of title
    const myLogo = new Image();
    myLogo.src = Logo;
    titleWrapper.appendChild(myLogo);

    // //create title-btn
    // const titleBtns = document.createElement('div');
    // titleBtns.classList.add('title-btn-wrapper');
    // titleBtns.innerHTML="<button id='order-btn'>Order online</button>"

    main.appendChild(titleWrapper);

    return main;
}