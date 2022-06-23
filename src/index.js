console.log('Hello');
import './style.css';
import Icon from './images/1.png';


function pageLoad() {
const content = document.getElementById('content');

content.innerHTML = `<header><h1>Wasa Bae</h1></header>
This is a fake webpage for a fake restaurant that sells sushi.`

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  content.appendChild(myIcon);

return content;
}


document.body.appendChild(pageLoad());