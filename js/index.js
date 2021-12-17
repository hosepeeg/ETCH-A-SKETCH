const container = document.querySelector(`.container`);
const slider = document.getElementById("slider");
const erasor = document.getElementById("erasorButton");
const grayScaleButton = document.getElementById("grayScaleButton");
const rainbowButton = document.getElementById(`rainbowButton`);
const clearButton = document.getElementById(`clearButton`);
const colorPicker = document.getElementById(`colorPicker`);
const backgroundColor = document.getElementById(`backgroundColor`);


function createDivs(number = 64){
    number *= number;
    for(let i = 0; i < number; i++){
        let divs = document.createElement(`div`);
        divs.classList = `block`;
        container.appendChild(divs);
        console.log(`loops ${i}`);
    }
}

function changeRange(){
    
}

createDivs();