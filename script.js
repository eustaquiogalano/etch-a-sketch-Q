const sixteenBySixteenContainer = document.querySelector('#sixteen-by-sixteen-container');

/////////////////////////////////////////////////////////////////////////////////

function createDivs() {

    let generateDivs = '';

    for (let i = 0; i < 256; i++) {
        generateDivs += `<div id='divs'></div>`;
    }

    sixteenBySixteenContainer.innerHTML = generateDivs;

    generateDivs = '';

}

/////////////////////////////////////////////////////////////////////////////////

createDivs();