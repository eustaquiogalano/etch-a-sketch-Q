const sixteenBySixteenContainer = document.querySelector('#sixteen-by-sixteen-container');
const clearButton = document.querySelector('#clear-button');
const cover = document.querySelector('#cover');

/////////////////////////////////////////////////////////////////////////////////

function createDivs() {
    let generateDivs = '';

    for (let i = 0; i < 6400; i++) {
        // create 256 pieces of div made of string
        generateDivs += `<div class='divs div${i}'></div>`;
    }

    // manipulate the container to insert all the div created
    sixteenBySixteenContainer.innerHTML = generateDivs;
    generateDivs = '';
}

function addListenersToDivs(listOfDivs) {  
    // give each div eventlistener 
    listOfDivs.forEach(element => {
        element.addEventListener('mouseover', () => {
            // when mouse enters the div change background color
            element.style.backgroundColor = 'black';        
        });
    });
}

sixteenBySixteenContainer.addEventListener('mouseup', () => {
    cover.style.display = 'block';
});

cover.addEventListener('mousedown', () => {
    cover.style.display = 'none';
});

clearButton.addEventListener('click', () => {
    divs.forEach(element => {
        element.style.backgroundColor = 'white';
    })
});

/////////////////////////////////////////////////////////////////////////////////

// generate grid layout and display
createDivs();

const rawDivs = document.querySelectorAll('.divs');
const divs = Array.from(rawDivs);

// gives the sketch pad effect
addListenersToDivs(divs);

