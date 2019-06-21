let catImage = document.getElementById('cat-image');
let counter = document.getElementById('counter');
let numOfClicks = 0;
let catName = ['Lucy', 'Miranda'];

catImage.addEventListener('click', function(){
    console.log("you clicked");
    numOfClicks++
    counter.innerHTML = ("Clicks: "+ numOfClicks);
});







