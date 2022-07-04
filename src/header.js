import pageLoad from './home.js';
import Icon from './images/logo-icon-75.jpg';
import menuLoad from './menu.js';
import aboutLoad from './about.js';


export default function createHeader() {

    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('header-wrapper');


    //Menu dropdown Icon About
    const menuBtn = document.createElement('div');
    menuBtn.textContent = "Menu";
    menuBtn.setAttribute('id', 'menu-btn');
    menuBtn.classList.add('nav');
    headerWrapper.appendChild(menuBtn);


    //add sushi icon
    const myIcon = new Image();
    myIcon.src = Icon;
    headerWrapper.appendChild(myIcon);
    // headerWrapper.innerHTML =
    //     "<div class ='nav' id='menu-btn'>Menu</div>|<div class='nav' id='about-btn'>About</div>"

    //About btn
    const aboutBtn = document.createElement('div');
    aboutBtn.textContent = "About";
    aboutBtn.setAttribute('id', 'about-btn');
    aboutBtn.classList.add('nav');
    headerWrapper.appendChild(aboutBtn);

    // On click of a nav item adds active class adding bottom border and removing class from other navBtn
    const navBtn = headerWrapper.querySelectorAll('.nav');
    navBtn.forEach((nav) => {
        nav.addEventListener('click', () => {
            for (let i = 0; i < navBtn.length; i++) {
                if (navBtn[i] !== this)
                    navBtn[i].classList.remove('active');
            }
            nav.classList.add('active');
        })
    })

    //Home page listener
    myIcon.addEventListener('click', () => {
        const content = document.querySelector('.content');
        content.replaceChildren(pageLoad());
    })

    //Menu page listener
    menuBtn.addEventListener('click', () => {
        const content = document.querySelector('.content');
        content.replaceChildren(menuLoad());
    })

    //About page listener
    aboutBtn.addEventListener('click', () => {
        const content = document.querySelector('.content');
        content.replaceChildren(aboutLoad());
    })

    return headerWrapper;
}