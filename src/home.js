import Icon from './images/sushi-small.png';

export default function pageLoad() {
    return createMain();
}

function createMain() {
    //create  main div
    const main = document.createElement('div');
    main.classList.add('main');

    //create title-wrapper div
    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('title-wrapper');
    titleWrapper.innerHTML = "<div class='title'>Wasa Bae</div>";

    //add sushi icon
    const myIcon = new Image();
    myIcon.src = Icon;
    titleWrapper.appendChild(myIcon);

    //create title-btn
    const titleBtns = document.createElement('div');
    titleBtns.classList.add('title-btn-wrapper');
    titleBtns.innerHTML="<button id='reservation-btn'>Make a reservation</button><button id='order-btn'>Order online</button>"

    main.appendChild(titleWrapper);

    main.appendChild(titleBtns);
    return main;
}