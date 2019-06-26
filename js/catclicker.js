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
        'cutie2.png',
        'kitten-440379.jpg',
        'Smoothie-the-Cat-Instagram-zoom.jpg',
        'Tech-In-Two-Grumpy-Cat-453408502-w.jpg',
        'two-tone-cat.jpg',
        'unnamed.jpg'
    ],

    numOfClicks: [0, 0, 0, 0, 0, 0, 0, 0],

    currentCat: 0

};



// View

let catListView = {

    init: function() {
        // connect to DOM-elements
        this.catList = document.querySelector('.cat-list');
    }
}

let catDisplayArea = {

    init: function() {
        // connect to DOM-elements
        this.image = document.querySelector('.display-cat-image');
        this.name = document.querySelector('.display-cat-name');
        this.counter = document.querySelector('.display-click-counter');


        this.image.addEventListener('click', function(){
            octopus.increaseCounter(catObject.currentCat);
            console.log(catObject.numOfClicks);
        });



    }
}


// "Octopus"

let octopus = {
    showCatName: function(index) {
        catDisplayArea.name.innerHTML = "Name: " +catObject.names[index];
    },

    showCounter: function() {
        catDisplayArea.counter.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Clicks: "+catObject.numOfClicks[catObject.currentCat];
    },

    increaseCounter: function(index) {
        // console.log("increase Counter");
        catObject.numOfClicks[index] +=1;
        // console.log(catObject.numOfClicks[index]);

        this.showCounter()
    },

    showImage: function(index) {
        let image = catObject.images[index];
        catDisplayArea.image.innerHTML = '<img width="400px" src="img/' + image + '">';
    },

    setCurrentCat: function(index) {
        catObject.currentCat = index;
        console.log("current Cat: "+catObject.currentCat);
    }

}

catListView.init();
catDisplayArea.init();



// View?

// TODO: Make View into object, all at one place


// show list of cat names
let catListFrag = document.createDocumentFragment();

for(i = 0; i < catObject.names.length; i++){
    let newCatName = document.createElement('div');
    newCatName.classList.add('cat-name');
    newCatName.innerHTML = catObject.names[i];

    // add event listeners to each cat name (index saved in a closure)
    newCatName.addEventListener('click', (function(icopy) {

        return function() {

            octopus.showCatName(icopy);
            // octopus.increaseCounter(icopy);  // add event listener to IMAGE area, store "current cat"
            octopus.showImage(icopy);
            octopus.setCurrentCat(icopy);
            octopus.showCounter(icopy);

        };
    })(i));

    catListFrag.append(newCatName);
}
catListView.catList.appendChild(catListFrag);
