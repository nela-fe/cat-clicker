let catField = document.querySelector('.cat-field');

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


// get the cats onto the page
let myCatFrag = document.createDocumentFragment();


for(i = 0; i < catNames.length; i++){

    let newCat = document.createElement('div');
    newCat.classList.add('cat');

    let newTopLine =document.createElement('div');
    newTopLine.classList.add('top-line');


    let newCatName = document.createElement('div');
    newCatName.classList.add('cat-name');
    newCatName.innerHTML = catNames[i];

    let newCatCounter = document.createElement('div');
    newCatCounter.classList.add('cat-counter');
    newCatCounter.innerHTML = '&nbsp;&nbsp;Clicks: 0';

    let newCatImage = document.createElement('div');
    newCatImage.classList.add('cat-image');
    let image = catImages[i];
    newCatImage.innerHTML = '<img height="120px" src="img/' + image + '">';


    newCatImage.addEventListener('click', (function(icopy) {

        // without the inner function code gets executed right away for all i's - why?
        return function() {
            console.log("you clicked on cat No. " +icopy);
            // numOfClicks[icopy] +=1;
            console.log(numOfClicks[icopy]);
            numOfClicks[icopy] +=1;
            console.log(numOfClicks[icopy]);
            console.log(numOfClicks);

            newCatCounter.innerHTML = "&nbsp;&nbsp;Clicks: "+numOfClicks[icopy];
        };
    })(i));


    newCat.appendChild(newTopLine);
    newTopLine.appendChild(newCatName);
    newTopLine.appendChild(newCatCounter);
    newCat.appendChild(newCatImage);

    myCatFrag.append(newCat);
}



catField.appendChild(myCatFrag);



let cat = document.querySelector('.cat');
console.log(cat);
// let catImage = document.querySelector('.cat-image');
// // console.log(catImage);
// let catNameField = document.querySelector('.cat-name');
// // console.log(catNameField);
// let counter = document.querySelector('.cat-counter');
// console.log(counter);


