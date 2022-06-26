export default function pageLoad() {
    const content = document.createElement('div');
    content.appendChild(createHeader());
    content.appendChild(createBody());
    return content;
}

function createBody() {
    const body = document.createElement('div');
    body.innerHTML = "<div class='body-wrapper'><h1 class='title'>Wasa Bae</h1></div>";
    return body;
}