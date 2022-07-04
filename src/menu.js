export default function menuLoad() {
    return createMenu();
}

// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(r) {
    return r.keys().map(r);
  }

const images = importAll(require.context('./images/sushi/', false, /\.(png|jpe?g|svg)$/));

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');


    menu.appendChild(generateCards(images));
    return menu;
}

function generateCards(images) {

    const menuCardContainer = document.createElement('div');
    menuCardContainer.classList.add('menuCardContainer');
    //creates the menuCard container

    // const menuCard = document.createElement('div');
    // menuCard.classList.add('menuCard');
    // menuCardContainer.appendChild(menuCard);

    // //creates sushi Image inside menuCard
    // const menuImg = document.createElement('img');
    // menuImg.classList.add('menuImg');
    // menuImg.src = images[0];
    // menuCard.appendChild(menuImg);

    images.forEach((e, i) => {
        //creates the menuCard container
        const menuCard = document.createElement('div');
        menuCard.classList.add('menuCard');

        //creates sushi Image inside menuCard
        const menuImg = document.createElement('img');
        menuImg.classList.add('menuImg');
        menuImg.src =  images[i]

        menuCard.appendChild(menuImg);


        menuCardContainer.appendChild(menuCard);        
    });

    return menuCardContainer;
}