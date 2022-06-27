import './style.css';
import pageLoad from './home.js';
import createHeader from './header.js';


const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);


// header
content.appendChild(createHeader());


//body
content.appendChild(pageLoad());



const homeBtn = document.getElementById