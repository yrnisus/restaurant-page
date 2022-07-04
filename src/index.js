import './style.css';
import pageLoad from './home.js';
import createHeader from './header.js';

// header
const header = document.createElement('header');
document.body.appendChild(header);;
header.appendChild(createHeader());


//body
const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);
content.appendChild(pageLoad());



const homeBtn = document.getElementById