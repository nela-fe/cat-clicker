// Model

let catObject = {

    names: [
        'Lucy',
        'Miranda',
        'Mickey',
        'Shay',
        'Smoothie',
        'Grumpy',
        'Two-tone',
        'Cuddly'
    ],

    images: [
        'cat.jpg',
        'cutecat1.png',
        'cutecat2n.webp',
        'kitten-440379.jpg',
        'Smoothie-the-Cat-Instagram-zoom.jpg',
        'Tech-In-Two-Grumpy-Cat-453408502-w.jpg',
        'two-tone-cat.jpg',
        'unnamed.jpg'
    ],

    numOfClicks: [0, 0, 0, 0, 0, 0, 0, 0]

};

// View

// Cat list
let catList = document.querySelector('.cat-list');

// Display Area
let displayArea = document.querySelector('.display-area');
let displayCatImage = document.querySelector('.display-cat-image');
let displayCatName = document.querySelector('.display-cat-name');
let displayCounter = document.querySelector('.display-click-counter');



// "Octopus?"

function showCatName(index) {
    displayCatName.innerHTML = "Name: " +catObject.names[index];
}

// put this as a method in the cat object?
function increaseCounter(index) {
    catObject.numOfClicks[index] +=1;
    displayCounter.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Clicks: "+catObject.numOfClicks[index];
};

function showImage(index) {
    let image = catObject.images[index];
    displayCatImage.innerHTML = '<img width="400px" src="img/' + image + '">';
}



// View

// show list of cat names
let catListFrag = document.createDocumentFragment();

for(i = 0; i < catObject.names.length; i++){
    let newCatName = document.createElement('div');
    newCatName.classList.add('cat-name');
    newCatName.innerHTML = catObject.names[i];

    // add event listeners to each cat (index saved in a closure)
    newCatName.addEventListener('click', (function(icopy) {

        return function() {

            showCatName(icopy);
            increaseCounter(icopy);
            showImage(icopy);

        };
    })(i));

    catListFrag.append(newCatName);
}
catList.appendChild(catListFrag);
