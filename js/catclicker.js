let catField = document.querySelector('.cat-field');


let numOfClicks = 0;
let catName = ['Lucy', 'Miranda'];


// get the cats onto the page
let myCatFrag = document.createDocumentFragment();

for(i = 0; i < 2; i++){

    let newCat = document.createElement('div');
    newCat.classList.add('cat');

    let newCatName = document.createElement('div');
    newCatName.classList.add('cat-name');
    newCatName.innerHTML = 'Name: '+catName[i];

    let newCatCounter = document.createElement('div');
    newCatCounter.classList.add('cat-counter');
    newCatCounter.innerHTML = 'Clicks: 0';

    let newCatImage = document.createElement('div');
    newCatImage.classList.add('cat-image');
    newCatImage.innerHTML = '<img src="img/minimalist-cat-drawing_s.jpg"></img>';

    newCat.appendChild(newCatName);
    newCat.appendChild(newCatCounter);
    newCat.appendChild(newCatImage);


    myCatFrag.append(newCat);

}

catField.appendChild(myCatFrag);



let cat = document.querySelector('.cat');
let catImage = document.querySelector('.cat-image');
// console.log(catImage);
let catNameField = document.querySelector('.cat-name');
// console.log(catNameField);
let counter = document.querySelector('.cat-counter');
console.log(counter);




        // TODO: add eventListener to catField
        // increase number for counter of cat that was clicked
        cat.addEventListener('click', function(){
            console.log("you clicked");
            numOfClicks++
            counter.innerHTML = ("Clicks: "+ numOfClicks);
        });







