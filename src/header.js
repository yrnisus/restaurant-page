import pageLoad from './home';
import Icon from './images/logo-icon-75.jpg';

export default function createHeader() {
    const header = document.createElement('header');
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
    header.appendChild(headerWrapper);
    
     //About btn
     const aboutBtn = document.createElement('div');
     aboutBtn.textContent = "About";
     aboutBtn.setAttribute('id', 'about-btn');
     aboutBtn.classList.add('nav');
     headerWrapper.appendChild(aboutBtn);


    myIcon.addEventListener('click', () => {
        pageLoad();
    })


    // On click of a nav item adds active class adding bottom border and removing class from other navBtn
    const navBtn = header.querySelectorAll('.nav');
    navBtn.forEach((nav) => {
        nav.addEventListener('click', () => {
            for (let i = 0; i < navBtn.length; i++) {
                if (navBtn[i] !== this)
                    navBtn[i].classList.remove('active');
            }
            nav.classList.add('active');
        })
    })

    return header;
}

