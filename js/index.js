const container = document.querySelector(`.container`);
const slider = document.getElementById("slider");
const erasor = document.getElementById("erasorButton");
const grayScaleButton = document.getElementById("grayScaleButton");
const rainbowButton = document.getElementById(`rainbowButton`);
const clearButton = document.getElementById(`clearButton`);
const colorPicker = document.getElementById(`colorPicker`);
const backgroundColor = document.getElementById(`backgroundColor`);
const output = document.querySelector(`output`);

let color = `#000000`;
let bgColor = `#FFFFFF`;
let rainbow = false;
let greyscale = false;
let erase = false;

//sets the background color of all divs to current background color
function reset(){
    let children = container.getElementsByTagName("div"); //creates array of all div elements in container
    for(let i = 0; i<children.length; i++){
        children[i].style.background = bgColor;
        }

}

//changes the selected color for painting blocks
function chooseColor(){
    color = colorPicker.value;
}

//fills the color of bakground of selected color
function bgChange(){
    bgColor = backgroundColor.value;
    reset();
}

//creates divs based on the dimensions given by the slider
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

//clears the divs within the container
function clearDivs(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

//allows slider to change the dimensions of the grid
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
    if(rainbow === true){
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${R} ${G} ${B})`;
    }
    else if(erase === true){
        e.target.style.backgroundColor = bgColor;
    }
    else{
        e.target.style.backgroundColor = color;
    }
}

//will handle the event on click for reset button (runs reset function)
clearButton.addEventListener(`click`, reset);
colorPicker.addEventListener(`change`, chooseColor);
colorPicker.addEventListener(`click`, chooseColor);
backgroundColor.addEventListener(`change`, bgChange);

rainbowButton.addEventListener(`click`, function(){
    if(rainbow === true){
        rainbow = false;
    }
    else{
        erase = false;
        rainbow = true;
        greyscale = false;
    }
});

//makes pointer color to that of the background to erase moused-over blocks
erasor.addEventListener(`click`, function() {
    if(erase === true){
        erase = false;
    }
    else{
        erase = true;
        rainbow = false;
        greyscale = false;
    }
});

grayScaleButton.addEventListener(`click`, function() {
    if(greyscale === true){
        greyscale = false;
    }

    else{
        erase = false;
        rainbow = false;
        greyscale = true;
    }
});

createDivs();