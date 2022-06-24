export default function pageLoad() {
    
    const header = document.createElement('div');
    header.innerHTML = 
    "<header><div class='header-wrapper'><div class='active'>Home</div><div>Menu</div><div>About</div></div class='header-wrapper'></header>"

    return header;
}