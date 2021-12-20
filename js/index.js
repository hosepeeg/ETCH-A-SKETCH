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
    let firstRow = number;
    number *= number;
    for(let i = 0; i < number; i++){
        let divs = document.createElement(`div`);
        divs.classList = `block`;
        container.appendChild(divs);
        divs.addEventListener(`mouseover`, changeColor);

        //remove top border of first row
        if(i < firstRow){
            divs.style.borderTop = `0ch`;
        }

        //remove left border of first div on each row
        if((i+1)%firstRow === 1){
            divs.style.borderLeft = `0ch`;
        }
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
    console.log(e.target);
}


createDivs();