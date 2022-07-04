import toggleBG from './bg-toggle.js';
import img from './images/chef.jpg';

export default function aboutLoad() {
    return createAbout();
}

function createAbout() {
    
    toggleBG('about');

    const about = document.createElement('div');
    about.classList.add('about');

    const aboutTitle = document.createElement('div');
    aboutTitle.innerHTML = "<span class='pink'>Bae</span> Life";
    aboutTitle.classList.add('about-title');
    about.appendChild(aboutTitle);

    const aboutBG = document.createElement('div');
    aboutBG.classList.add('about-text-bg');

    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');
    aboutText.innerHTML = "The best fake sushi restaurant in West Palm Beach<br><br>561-555-1234";
    aboutBG.appendChild(aboutText);

    
    about.appendChild(aboutBG);



    return about;
}
