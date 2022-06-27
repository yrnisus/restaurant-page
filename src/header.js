export default function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = 
    "<header><div class='header-wrapper'><div class='active nav' id='home-btn'>Home</div>|<div class ='nav' id='menu-btn'>Menu</div>|<div class='nav' id='about-btn'>About</div></div class='header-wrapper'></header>"
    

    // On click of a nav item adds active class adding bottom border and removing class from other navBtn
    const navBtn =  header.querySelectorAll('.nav');
    navBtn.forEach((nav) => {
        nav.addEventListener('click', () => {
            for(let i =0; i < navBtn.length; i++) {
                if(navBtn[i] !== this)
                    navBtn[i].classList.remove('active');
            }
            nav.classList.add('active');
        })
    })

    return header;
}