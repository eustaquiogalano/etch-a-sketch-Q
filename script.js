// creates and displays the box on the container
function createBoxes() {
    let generatedStringOfDivs = '';

    for (let i = 0; i < countEachSide * countEachSide; i++) {
        generatedStringOfDivs += `<div class="box"></div>`;
    }

    gridContainer.innerHTML = generatedStringOfDivs;
    generatedStringOfDivs = '';
} 

// this will modify each box background to black once mouse over
function addListenersToEachBox(listOfBoxes) {
    listOfBoxes.forEach(box => {        
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';  
        });
    });
}

// on and off switch of display property of an element
function displayToggle(element) {
    element.classList.toggle('display-toggle');
}

// returns array of box element
function getListOfBox() {
    const boxes = document.querySelectorAll('.box');  // get all the box created for manipulation
    return listOfBoxes = Array.from(boxes)  // convert node list to array
}

// this will ask user to input number of box each side
function modifyEachBox() {
    // get the user preference of how many box
    countEachSide = +prompt('How many box?', 100);
    dimensionOfBox = Math.trunc(806 / countEachSide);

    // create box again
    createBoxes();

    // set each box's height and width 
    getListOfBox().forEach(box => {
        box.style.height = `${dimensionOfBox}px`;
        box.style.width = `${dimensionOfBox}px`;
    });

    // add listener
    addListenersToEachBox(getListOfBox());
}



/////////////////////////////////////////////////////////////////////////////////////

const gridContainer = document.querySelector('#sixteen-by-sixteen-container');
const clearButton = document.querySelector('#clear-button');
const cover = document.querySelector('#cover');
let countEachSide = 100;
let dimensionOfBox;

// START

// create and display the boxes
createBoxes();

// put event listener to each box
addListenersToEachBox(getListOfBox());

// on mouse down remove cover to initiate stroke effect
cover.addEventListener('mousedown', () => {
    displayToggle(cover);
});

// on mouse up return cover to stop stroke effect
gridContainer.addEventListener("mouseup", () => {
    displayToggle(cover);
});

// on click, ask user how many box each side to display
clearButton.addEventListener('click', () => {
    modifyEachBox();
});


 



