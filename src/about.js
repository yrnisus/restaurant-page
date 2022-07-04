export default function aboutLoad() {
    return createAbout();
}

function createAbout() {
    const about = document.createElement('div');
    about.classList.add('about');
    return about;
}