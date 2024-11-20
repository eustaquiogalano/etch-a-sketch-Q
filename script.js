const sixteenBySixteenContainer = document.querySelector('#sixteen-by-sixteen-container');

/////////////////////////////////////////////////////////////////////////////////

function createDivs() {
    let generateDivs = '';

    for (let i = 0; i < 256; i++) {
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
        element.addEventListener('mouseenter', () => {
            // when mouse enters the div change background color
            element.style.backgroundColor = 'black'
        });
    });
}

/////////////////////////////////////////////////////////////////////////////////

createDivs();

const rawDivs = document.querySelectorAll('.divs');
const divs = Array.from(rawDivs);

addListenersToDivs(divs);

