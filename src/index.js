console.log('Hello');
import './style.css';
import pageLoad from './home.js'

const content = document.getElementById('content');

content.appendChild(pageLoad());