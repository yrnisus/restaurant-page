console.log('Hello');
import './style.css';
import pageLoad from './home.js'
import createHeader from './header';


const content = document.createElement('div');
content.classList.add('content');
// header
content.appendChild(createHeader());


// content.appendChild(pageLoad());

document.body.appendChild(content);


const homeBtn = document.getElementById