const container = document.querySelector(`.container`);
const slider = document.getElementById("slider");
const erasor = document.getElementById("erasorButton");
const grayScaleButton = document.getElementById("grayScaleButton");
const rainbowButton = document.getElementById(`rainbowButton`);
const clearButton = document.getElementById(`clearButton`);
const colorPicker = document.getElementById(`colorPicker`);
const backgroundColor = document.getElementById(`backgroundColor`);
const output = document.querySelector(`output`);
function createDivs(number = 64){
    let lastRow = number;
    let last = number;
    number *= number;
    lastRow = number - lastRow
    for(let i = 0; i < number; i++){
        let divs = document.createElement(`div`);
        divs.classList = `block`;
        container.appendChild(divs);

        //adds bottom border to last row
        if(i >= lastRow){
            divs.style.borderBottom = `0.1ch solid black`;
        }

        //adds right border to last div on rightmost of container
        if((i+1)%last === 0){
            divs.style.borderRight = `0.1ch solid black`;
        }
        
        divs.addEventListener(`mouseover`, changeColor);
    }
}

function clearDivs(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

slider.addEventListener(`input`, function() {
    output.innerHTML = `${slider.value} x ${slider.value}`;
    let number = slider.value;
    clearDivs();
    container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    createDivs(number);
}, false);

//colors the div based on selected button
function changeColor(e){
    e.target.style.backgroundColor = `black`;
}


createDivs();