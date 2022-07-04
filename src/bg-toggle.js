
export default function toggleBG(page) {
    document.body.className = "";
    document.body.classList.add(`${page}BGActive`);
}
