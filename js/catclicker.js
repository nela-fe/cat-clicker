let catField = document.querySelector('.cat-field');
let displayArea = document.querySelector('.display-area');
let cat = document.querySelector('.cat');
let catImage = document.querySelector('.cat-image');
let catName = document.querySelector('.top-cat-name');
let counter = document.querySelector('.click-counter');


let catNames = [
    'Lucy',
    'Miranda',
    'Mickey',
    'Shay',
    'Smoothie',
    'Grumpy',
    'Two-tone',
    'Cuddly'];


let catImages = [
    'cat.jpg',
    'cutecat1.webp',
    'cutecat2n.webp',
    'kitten-440379.jpg',
    'Smoothie-the-Cat-Instagram-zoom.jpg',
    'Tech-In-Two-Grumpy-Cat-453408502-w.jpg',
    'two-tone-cat.jpg',
    'unnamed.jpg'];


let numOfClicks = [0, 0, 0, 0, 0, 0, 0, 0];


let myCatFrag = document.createDocumentFragment();


for(i = 0; i < catNames.length; i++){
    let newCatName = document.createElement('div');
    newCatName.classList.add('cat-name');
    newCatName.innerHTML = catNames[i];

    newCatName.addEventListener('click', (function(icopy) {

        // without the inner function code gets executed right away for all i's - why?
        return function() {

            catName.innerHTML = "Name: " +catNames[icopy];

            numOfClicks[icopy] +=1;
            counter.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Clicks: "+numOfClicks[icopy];

            let image = catImages[icopy];
            catImage.innerHTML = '<img width="400px" src="img/' + image + '">';

        };
    })(i));


    myCatFrag.append(newCatName);

}


catField.appendChild(myCatFrag);

